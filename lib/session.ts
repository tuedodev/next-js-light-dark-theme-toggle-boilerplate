'use server';

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { cipherText, decipherText } from '@/lib/action';
import type { SessionType } from '@/lib/types';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { FALLBACK_THEME, SESSION_EXPIRING_SECONDS, COOKIE_CONSENT_EXPIRING_SECONDS } from './constants';

export async function updateSessionToken(object: Partial<SessionType>) {
	const newCookie = await updateSessionTokenObject(object);
	const response = NextResponse.next();
	response.cookies.set(newCookie as ResponseCookie);
	return response;
}

export async function getSessionToken(): Promise<(SessionType & { error?: boolean; errorMsg?: string }) | null> {
	const sessiontoken = cookies().get('sessiontoken')?.value;
	if (!sessiontoken) {
		return null;
	} else {
		const { success, data } = await decipherText(sessiontoken);
		if (success) {
			const sessionObject = await JSON.parse(data);
			if (
				'theme' in sessionObject &&
				'username' in sessionObject &&
				'email' in sessionObject &&
				'cookieConsentDialogSent' in sessionObject
			) {
				return {
					theme: sessionObject.theme,
					username: sessionObject.username,
					email: sessionObject.email,
					cookieConsentDialogSent: sessionObject.cookieConsentDialogSent,
				};
			}
		}
		return { error: true, errorMsg: 'Sessiontoken is not valid.' };
	}
}

export async function updateSessionTokenObject(updateObject: Partial<SessionType>) {
	let sessiontoken = await getSessionToken();
	sessiontoken =
		sessiontoken && !sessiontoken.error
			? { ...sessiontoken, ...updateObject }
			: { username: '', email: '', theme: FALLBACK_THEME, cookieConsentDialogSent: false, ...updateObject };
	const value = JSON.stringify(sessiontoken);
	const expires = new Date(Date.now() + SESSION_EXPIRING_SECONDS * 1000);
	const cipher = await cipherText(value);
	const newSessionToken = cipher.success ? cipher.data : '';
	return {
		name: 'sessiontoken',
		value: newSessionToken,
		httpOnly: true,
		expires,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
	};
}

export async function clientUpdatesSessionToken(object: Partial<SessionType>) {
	const newCookie = await updateSessionTokenObject(object);
	cookies().set(newCookie as ResponseCookie);
}
export async function getCookieConsent() {
	const cookieConsent = cookies().get('cookie-consent')?.value;
	return cookieConsent ? cookieConsent : null;
}

export async function setCookieConsent() {
	cookies().set({
		name: 'cookie-consent',
		value: 'yes',
		expires: new Date(Date.now() + COOKIE_CONSENT_EXPIRING_SECONDS * 1000),
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
	});
}

export async function sendCookieConsentOnce() {
	await updateSessionTokenObject({ cookieConsentDialogSent: true });
}
