import {Button, Modal, Text} from "@nextui-org/react";
import React, {FC, memo, useCallback, useMemo, useState} from 'react';


interface FormData {
    name: string;
    email: string;
    message: string;
}

interface ResponseMessage {
    type: string,
    message: string
}

const ContactForm: FC = memo(() => {
    const defaultData = useMemo(
        () => ({
            name: '',
            email: '',
            message: '',
        }),
        [],
    );

    const [data, setData] = useState<FormData>(defaultData);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<ResponseMessage>({type: '', message: ''});

    const onChange = useCallback(
        <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
            const {name, value} = event.target;

            const fieldData: Partial<FormData> = {[name]: value};

            setData({...data, ...fieldData});
        },
        [data],
    );

    const handleSendMessage = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        /**
         * This is a good starting point to wire up your form submission logic
         * */
            // console.log('Data to send: ', data);
            // alert("Thanks for your message, I will contact you ASAP!")
        const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

        res.ok ?
            setModalMessage({
                type: 'success',
                message: 'Message has been received, I will contact you ASAP!'
            })
            : setModalMessage({
                type: 'error',
                message: "Something wrong! Please try again later!"
            });

        setIsModalOpen(true);

    }, [data],);

    const closeHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setData(defaultData);
        setIsModalOpen(false);
    },[],);

    const inputClasses =
        'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

    return (
        <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
            <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={data.name}/>
            <input
                autoComplete="email"
                className={inputClasses}
                name="email"
                onChange={onChange}
                placeholder="Email"
                required
                type="email"
                value={data.email}
            />
            <textarea
                className={inputClasses}
                maxLength={250}
                name="message"
                onChange={onChange}
                placeholder="Message"
                required
                rows={6}
                value={data.message}
            />
            <Modal
                aria-labelledby="modal-title"
                autoMargin={true}
                closeButton
                onClose={closeHandler}
                open={isModalOpen}
                preventClose={true}
                width="500px"
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Sending result
                    </Text>
                </Modal.Header>
                <Text color={modalMessage.type}>{modalMessage.message}</Text>
                <Modal.Footer>
                    <Button auto onPress={closeHandler}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            <button
                aria-label="Submit contact form"
                className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
                type="submit">
                Send Message
            </button>
        </form>
    );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
