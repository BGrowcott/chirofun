function Contact() {
    return (
        <section className="row">
            <div className="col-12 col-md-6">
                <form id="contactForm" className="rounded bg-light-fade p-3">
                    <div>
                        <label className="text-muted" htmlFor="nameInput">
                            Name
                        </label>
                        <input
                            className="contactFormInput"
                            id="nameInput"
                        ></input>
                    </div>
                    <div className="mt-1">
                        <label className="text-muted" htmlFor="emailInput">
                            Email
                        </label>
                        <input
                            className="contactFormInput"
                            id="emailInput"
                        ></input>
                    </div>
                    <div className="mt-1">
                        <label className="text-muted" htmlFor="messageInput">
                            Message
                        </label>
                        <textarea
                            rows="3"
                            className="contactFormInput"
                            id="messageInput"
                        ></textarea>
                    </div>
                </form>
            </div>

            <div className="col-12 col-md-6">
                <div className="bg-light-fade rounded p-3 h-100">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
