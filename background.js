chrome.alarms.create('DAILY_REMINDER', {
	periodInMinutes: 1440,
});

chrome.alarms.onAlarm.addListener((alarm) => {
	if (alarm.name === 'DAILY_REMINDER') {
		chrome.notifications.create('DAILY_REMINDER', {
			type: 'basic',
			iconUrl: 'css-coffee.png',
			title: 'Your CSS Coffee For Today is Ready!',
			message: 'visit https://csscoffee.dev for your daily sip of css!',
			priority: 2,
		});
	}
});

chrome.notifications.onClicked.addListener((notificationId) => {
	if (notificationId === 'DAILY_REMINDER') {
		chrome.tabs.create({
			url: 'https://csscoffee.dev/',
		});
	}
});
