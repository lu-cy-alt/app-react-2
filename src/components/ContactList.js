import React from 'react';
import Contact from './Contact'

const characters = [
    {
        name:"Thomas Shelby",
        avatar: 
      "https://img.over-blog-kiwi.com/2/10/17/26/20171229/ob_37f363_a486fe6cadfd373fad9de51daffa1834.jpg",
        online: false
    },
    {
        name:"Arthur Shelby",
        avatar: 
        "https://i.pinimg.com/originals/7b/55/e2/7b55e21e7c94ac0a189d26e0a6e28267.jpg",
        online: true
    },
    {
        name:"John Shelby",
        avatar: 
        "https://pictures.betaseries.com/personnages/852800.jpg",
        online: false
    },
    {
        name:"Polly Gray",
        avatar: 
        "https://ichef.bbci.co.uk/images/ic/1200x675/p07l1zgq.jpg",
        online: true
    },
    {
        name:"Ada Shelby",
        avatar: 
        "https://vignette.wikia.nocookie.net/peaky-blinders/images/b/be/Ada4.jpg/revision/latest/scale-to-width-down/310?cb=20171226144632",
        online: true
    }
];

const ContactList = () => (
    <div>
        {characters.map(item => (
          <Contact 
          name={item.name} 
          avatar={item.avatar} 
          online={item.online} />  
        ))}
    </div>
)



export default ContactList;






