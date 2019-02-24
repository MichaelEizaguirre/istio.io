"use strict";function applyStyleSheet(title) {    if (title === "Dark Theme") {        document.body.classList.add("dark-theme");    } else {        document.body.classList.remove("dark-theme");    }    // set the active theme menu item    let item = document.getElementById("light-theme-item");    if (item !== null) {        if (title === "Light Theme") {            item.classList.add("active");        } else {            item.classList.remove("active");        }    }    item = document.getElementById("dark-theme-item");    if (item !== null) {        if (title === "Dark Theme") {            item.classList.add("active");        } else {            item.classList.remove("active");        }    }}function createCookie(name, value, days) {    let expires = "";    if (days) {        const date = new Date();        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));        expires = "; expires=" + date.toGMTString();    }    document.cookie = name + "=" + value + expires + "; path=/";}function readCookie(name) {    const nameEQ = name + "=";    const ca = document.cookie.split(';');    for (let i = 0; i < ca.length; i++) {        let c = ca[i];        while (c.charAt(0) === ' ') {            c = c.substring(1, c.length);        }        if (c.indexOf(nameEQ) === 0) {            let result = c.substring(nameEQ.length, c.length);            // convert legacy cookie values            if (result === "light") {                result = "Light Theme";            } else if (result === "dark") {                result = "Dark Theme";            }            return result;        }    }    return null;}function setActiveStyleSheet(title) {    applyStyleSheet(title);    createCookie("style", title);}function loadActiveStyleSheet() {    let cookie = readCookie("style");    if (cookie !== null) {        applyStyleSheet(cookie);    }}loadActiveStyleSheet();document.addEventListener('DOMContentLoaded', () => {    loadActiveStyleSheet();});