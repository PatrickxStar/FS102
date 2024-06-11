let appData = {
    name: 'Gmail',
    mailboxes: ['inbox', 'junk', 'sent', 'drafts', {draftEmail: 'drafts@gmail.com'}],
    contacts: [
        {name: 'Christian', lastMessage: "Email: Seen"},
        {name: 'Jason', lastMessage: "I'm going to get lunch."}],
    emailAddress: ['christian@gmail', 'jason@gmail']

    
};
console.log(appData.mailboxes.slice(0,-1));
console.log(appData.emailAddress);   
    console.log(appData.contacts[1].lastMessage);
    console.log(appData.contacts[0].lastMessage);
    console.log(appData.mailboxes[4].draftEmail);
