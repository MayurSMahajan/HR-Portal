import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useQuery } from "react-query";
import { BASE_URL } from "../components/utils/util";


export const MessageContext = createContext(null)

export const MessageDataProvider = ({ children }) => {

    const [CurrentChatID, setCurrentChatID] = useState()
    const [mobileChatClicked, setMobileChatClicked] = useState(false)

    const { isLoading: loadingMessages, data: messages } = useQuery(['Message', CurrentChatID], async () => {
        if (CurrentChatID !== undefined) {
            const token = localStorage.getItem('token');
            const config = {
                headers: { 'x-access-token': token }
            };

            const response = await axios.get(`${BASE_URL}/chat/get-message/${CurrentChatID}`, config);
            console.log("mess", response.data.response);
            return response.data.response;
        }
    });

    const { isLoading: loadingMembers, data: members } = useQuery('Member', async () => {
        const token = localStorage.getItem('token');
        const config = {
            headers: { 'x-access-token': token }
        };

        const response = await axios.get(`${BASE_URL}/chat/get-members`, config);
        console.log("mem", response.data.members);
        setCurrentChatID(response.data.members[0]?._id);
        return response.data.members;
    });

    const [Members, setMembers] = useState(members);
    const [Messages, setMessages] = useState(messages);

    useEffect(() => {
        setMembers(members);
        if (members && CurrentChatID === null) setCurrentChatID(members[0]?._id)
        // eslint-disable-next-line
    }, [members]);

    useEffect(() => {
        setMessages(messages);
    }, [messages]);

    return (
        <MessageContext.Provider value={{
            CurrentChatID, setCurrentChatID,
            Members, setMembers,
            Messages, setMessages,
            loadingMembers, loadingMessages,
            mobileChatClicked, setMobileChatClicked
        }}>
            {children}
        </MessageContext.Provider>
    )
}