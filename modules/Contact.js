const displayContact = () => {
  const content = document.getElementById('content');
  const heading = document.createElement('h1');
  heading.textContent = 'Contact Information';
  const article = document.createElement('article');
  article.className = 'contact';
  article.id = 'contact';

  const msg = document.createElement('p');
  msg.innerHTML = 'For any inquiries. <br> You can reach out to us!';

  const ulContact = document.createElement('ul');
  ulContact.id = 'contact-info';

  const email = document.createElement('li');
  email.textContent = 'E-mail : info@awesome.com';

  const phone = document.createElement('li');
  phone.textContent = 'Phone : 0012345678900';

  const address = document.createElement('li');
  address.textContent = 'Address : Right around somewhere in Milkyway Galaxy.';

  ulContact.append(email, phone, address);
  article.append(msg, ulContact);
  content.append(heading, article);
};

export default displayContact;
