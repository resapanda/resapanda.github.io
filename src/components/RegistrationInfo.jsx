import React, { useState } from 'react';

function RegistrationInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
      <div>
            <form>
                <fieldset>
                    <legend>Registration</legend>
                        <label for="name">Your name: </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        /><br></br>
                        <label for="email">Your email: </label>
                        <input
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        /><br></br>
                </fieldset>
                <button onClick={e => {
                    alert(`Hi, ${name}! Thanks for registering. We will send you promotions at ${email}!`);
                    e.preventDefault();
                }}>Submit</button>
            </form>
      </div>
    );
  }
  
export default RegistrationInfo;