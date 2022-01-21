// ==UserScript==
// @name         Сообщения Модератора
// @namespace    https://github.com/pchely/userscripts
// @version      1.0
// @description  Шаблоны сообщений для модераторов чата Фоксфорда
// @author       skhrvg
// @match        https://foxford.webinar.netology-group.services/*
// @grant        none
// @updateURL    https://github.com/pchely/userscripts/raw/master/ModeratorMessages.user.js
// @downloadURL  https://github.com/pchely/userscripts/raw/master/ModeratorMessages.user.js
// ==/UserScript==

(function() {
    'use strict'

    const messages = {
        "Приветствия": [
            "Добрый день, дорогие учащиеся! Презентация будет доступна в записи после вебинара. В случае возникновения сложностей с использованием платформы, обновите страницу. Если проблема не пропала, напишите о ней на: ask@foxford.ru. Не забывайте, что у нас имеются правила чата, поэтому не отвлекайтесь от занятия и не отвлекайте других.",
            "Добрый день, дорогие друзья! Презентация станет доступна ближе к концу занятия. В случае возникновения сложностей с использованием платформы, обновите страницу. Если проблема не пропала, напишите о ней на: ask@foxford.ru. Не забывайте, что у нас имеются правила чата, поэтому не отвлекайтесь от занятия и не отвлекайте других.",
            "Добрый день, дорогие учащиеся! Презентация доступна по ссылке (). В случае возникновения сложностей с использованием платформы, обновите страницу. Если проблема не пропала, напишите о ней на: ask@foxford.ru. Не забывайте, что у нас имеются правила чата, поэтому не отвлекайтесь от занятия и не отвлекайте других.",
            "Добрый день, дорогие учащиеся! Презентация будет доступна в записи после вебинара или по желанию преподавателя в течении занятия. В случае возникновения сложностей с использованием платформы, обновите страницу. Если проблема не пропала, напишите о ней на: ask@foxford.ru. Не забывайте, что у нас имеются правила чата, поэтому не отвлекайтесь от занятия и не отвлекайте других.",
        ],
        "Технический перерыв": [
            "Дорогие учащиеся, к сожалению, мы вынуждены уйти на технический перерыв. Просим вас оставаться на своих местах. Решение проблемы займет не более 5-ти минут. В случае возникновения других сложностей, мы оповестим вас в чате.",
            "Друзья, по техническим причинам мы вынуждены уйти на технический перерыв. Обычно это занимает не более 5-ти минут, но в случае возникновении других неполадок, мы оповестим вас.",
        ],
        "Помощь": [
            "При возникновении проблем с платформой просим вас обновить страницу. Если данный способ решения ситуации не помогает, то попробуйте очистить кэш вашего браузера. Также, напоминаем, что для использования нашей платформы рекомендуется использовать браузер Google Chrome. В случае отсутствия успеха, напишите о своей проблеме на: ask@foxford.ru.",
            "Мы рекомендуем вам обновить страницу с занятием, если данный способ не помог решить проблему, то попробуйте очистить кэш вашего браузера. Также, напоминаем, что для использования нашей платформы рекомендуется использовать браузер Google Chrome. В случае отсутствия успеха, напишите о своей проблеме на: ask@foxford.ru.",
        ],
        "Бан": [
            "Друзья, мы просим вас прекратить флуд и не мешать остальным заниматься. В ином случае, мы будем вынуждены ограничить вам доступ к чату.",
            "Дорогие учащиеся, убедительная просьба следовать правилам чата. У нас запрещены спам, агрессия, капс-лок, фальсификация, а также ссылки на другие платформы. В случае повторных нарушений наших правил, мы будем вынуждены ограничить вам доступ к чату.",
            "Друзья, напоминаем вам, что наша платформа предполагает ограничение доступа к чату в случае нарушения наших правил. В нашем чате запрещены спам, агрессия, капс-лок, фальсификация, а также ссылки на другие платформы.",
            "Учащиеся, чтобы не получить ограничение на использование чата, мы просим вас соблюдать правила нашей платформы. В нашем чате запрещены спам, агрессия, капс-лок, фальсификация, а также ссылки на другие платформы.",
            "К сожалению, на нашей платформе запрещена фальсификация имени. Просим вас поменять никнейм на ваши Имя и Фамилия, написанные кириллицей, в ином случаем, мы будем вынуждены ограничить вам доступ к чату.",
        ],
        "Перерыв": [
            "Друзья, мы уходим на перерыв до (). Просим вас не расходится, мы продолжим занятие совсем скоро.",
            "Дорогие учащиеся, настало время перерыва! Встретимся с вами буквально через () минут и продолжим обсуждение сегодняшней темы.",
        ],
        "Прощание": [
            "Друзья, наше занятие подошло к концу. Спасибо, что оставались с нами, желаем вам хорошего дня и успехов в учебе. До скорых встреч!",
            "К сожалению, наше занятие подошло к концу, с нетерпением будем ждать вас снова! Желаем всем хорошего дня и успехов в учебе.",
            "Дорогие учащиеся, наше занятие подходит к концу. Спасибо, что были с нами до самого конца! Желаем успехов в учебе и хорошего дня!",
        ],
        "Другое": [
            "Добрый день, дорогие друзья! Тема сегодняшнего занятия - (). Если у вас возникают сложности с использованием платформы, обновите страницу. Если проблема не пропала, напишите о ней на: ask@foxford.ru. Не забывайте, что у нас имеются правила чата, поэтому не отвлекайтесь от занятия и не отвлекайте других.",
        ],
    }

    const styles = document.createElement('style')
    styles.innerHTML = `
#usmsg-button {
    position: absolute;
    top: var(--chat-input-emoji-button-top);
    left: calc(var(--chat-input-emoji-button-left) + 32px);
    background: none;
    margin: 0;
    padding: 0;
    height: var(--chat-emoji-button-height);
    width: var(--chat-emoji-button-width);
    border: none;
    outline: none;
    cursor: pointer;
    color: #B8B8B8;
}
#usmsg-button:hover {
    color: var(--chat-main-color-active);
}
#usmsg-container {
    position: absolute;
    bottom: var(--chat-input-min-height);
    padding: 0;
    width: 100%;
    box-shadow: var(--chat-input-emoji-list-icon-box-shadow);
    border: var(--chat-actions-menu-content-border);
    border-radius: var(--chat-actions-menu-content-border-radius);
    background-color: var(--chat-actions-menu-content-bg);
    max-height: 350px;
    overflow-y: auto;
    overflow-x: hidden;
}
#usmsg-container.hidden {
    display: none;
}
.usmsg-message {
    background: none;
    margin: 0.3rem 1.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: left;
    padding: var(--chat-message-content-padding_aggregated);
    border-radius: var(--chat-message-border-radius);
    background-color: var(--chat-message-content-bg-color-me);
}
.usmsg-message-group {
    line-height: var(--chat-message-body-line-height);
    font-size: var(--chat-message-body-font-size);
    color: var(--chat-message-body-color);
}
.usmsg-message-group summary {
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    font-weight: bold;
    position: sticky;
    top: 0;
    background-color: var(--chat-actions-menu-content-bg);
}
.usmsg-message-group summary:hover {
    background-color: #f6f6f6;
}
.usmsg-message-group:first-child summary {
    margin-top: 0.5rem;
}
.usmsg-message-group:last-child summary {
    margin-bottom: 0.5rem;
}
    `
    document.head.append(styles)

    const container = document.createElement('div')
    container.id = 'usmsg-container'
    container.classList.add('hidden')

    function toggleContainer() {
        container.style.bottom = document.querySelector('textarea[data-id="ulms-chat-textarea"]').parentElement.clientHeight + 'px'
        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden')
            document.addEventListener("click", (evt) => {
                let targetElement = evt.target
                do {
                    if (targetElement == container || targetElement == button) return
                    targetElement = targetElement.parentNode
                } while (targetElement)
                container.classList.add('hidden')
                for (const group of container.children) group.open = false
            })
        }
        else {
            container.classList.add('hidden')
            for (const group of container.children) group.open = false
        }
    }

    const button = document.createElement('button')
    button.id = 'usmsg-button'
    button.type = 'button'
    button.innerHTML = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 2C5.5 2 3 4.5 3 7.5C3 8.3 3.2 9 3.4 9.7L3.6 10L2.8 13.1L5.7 12.2L6 12.4C6.7 12.8 7.6 13 8.5 13C11.5 13 14 10.5 14 7.5C14 4.5 11.5 2 8.5 2ZM1 7.5C1 3.4 4.4 0 8.5 0C12.6 0 16 3.4 16 7.5C16 11.6 12.6 15 8.5 15C7.4 15 6.4 14.8 5.4 14.3L0 16L1.5 10.1C1.2 9.3 1 8.4 1 7.5Z" fill="currentColor"/><path d="M10.4688 4L8.5 5.96875L6.53125 4L5 5.53125L6.96875 7.5L5 9.46875L6.53125 11L8.5 9.03125L10.4688 11L12 9.46875L10.0312 7.5L12 5.53125L10.4688 4Z" fill="currentColor"/></svg>`
    button.onclick = () => { toggleContainer() }

    const usMessages = document.createElement('div')
    usMessages.id = 'usmsg'
    usMessages.appendChild(button)
    usMessages.appendChild(container)

    function insertMessage(msg) {
        const chatTextarea = document.querySelector('textarea[data-id="ulms-chat-textarea"]')
        if (chatTextarea) {
            chatTextarea.value += msg
            chatTextarea.focus()
            const placeholder = msg.indexOf('()')
            if (placeholder >= 0) chatTextarea.setSelectionRange(placeholder, placeholder + 2)
        }
    }

    function createList() {
        container.innerHTML = ''
        for (const messageGroupName of Object.keys(messages)) {
            const messageGroup = document.createElement('details')
            const messageGroupSummary = document.createElement('summary')
            messageGroupSummary.innerText = messageGroupName
            messageGroup.appendChild(messageGroupSummary)
            messageGroup.classList.add('usmsg-message-group')
            for (const message of messages[messageGroupName]) {
                const messageButton = document.createElement('button')
                messageButton.classList.add('usmsg-message')
                messageButton.type = 'button'
                messageButton.innerText = message
                messageButton.onclick = () => { insertMessage(message); toggleContainer(); }
                messageGroup.appendChild(messageButton)
            }
            container.appendChild(messageGroup)
        }
    }

    createList()

    function init() {
        const chatTextarea = document.querySelector('textarea[data-id="ulms-chat-textarea"]')

        // ждем пока юзер нажмет на кнопку подключения
        if (!chatTextarea) return

        if (document.querySelector('#usmsg')) return

        // добавляем кнопку сообщений
        chatTextarea.style.paddingLeft = '80px'
        chatTextarea.parentElement.appendChild(usMessages)
    }

    setInterval(() => init(), 1000)
})();
