function loadPage(page) {
    const content = document.getElementById('content');
    switch(page) {
        case 'home':
            content.innerHTML = `
                <section class="welcome">
                    <h1>Welcome to the Roleplay Server</h1>
                    <p>Join us in an epic adventure and create your own story!</p>
                </section>
            `;
            break;
        case 'rules':
            content.innerHTML = `
                <section class="rules">
                    <h1>Server Rules</h1>
                    <ul>
                        <li>Be respectful to other players.</li>
                        <li>No griefing or trolling.</li>
                        <li>Follow the storyline and roleplay rules.</li>
                        <li>No cheating or exploiting bugs.</li>
                    </ul>
                </section>
            `;
            break;
        case 'character_creation':
            content.innerHTML = `
                <section class="character-creation">
                    <h1>Create Your Character</h1>
                    <form>
                        <label for="name">Character Name:</label>
                        <input type="text" id="name" name="name" required>

                        <label for="age">Character Age:</label>
                        <input type="number" id="age" name="age" required>

                        <label for="description">Character Description:</label>
                        <textarea id="description" name="description" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </section>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <section class="contact">
                    <h1>Contact Us</h1>
                    <form>
                        <label for="email">Your Email:</label>
                        <input type="email" id="email" name="email" required>

                        <label for="message">Your Message:</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </section>
            `;
            break;
        default:
            content.innerHTML = `<p>Page not found.</p>`;
    }
}

// Load the home page by default
window.onload = () => {
    loadPage('home');
};
