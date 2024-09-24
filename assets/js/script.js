document.addEventListener('DOMContentLoaded', function () {
    const conversationList = document.getElementById('conversationList');

    // Marcar como leído
    const conversations = document.querySelectorAll('.list-group-item');
    conversations.forEach(conversation => {
        conversation.addEventListener('click', function () {
            conversation.classList.remove('unread');
        });
    });
});
