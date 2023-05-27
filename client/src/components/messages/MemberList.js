import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import profile from '../../assets/icons/profileicon.png'
import { useEffect } from 'react';
import './message.css'
import { DashboardContext, MessageContext } from '../../context';

const MemberList = () => {
    const { Members, setCurrentChatID, setMobileChatClicked, mobileChatClicked } = useContext(MessageContext)
    const { innerWidth } = useContext(DashboardContext)
    const [searchMember, setSearchMember] = useState('')
    const [filteredMembers, setfilteredMembers] = useState('')


    const filterMember = () => {
        const findMember = Members?.filter((key) => {
            return key.name.includes(searchMember) || key.email.includes(searchMember)
        })
        console.log(findMember)
        setfilteredMembers(findMember)
    }

    useEffect(() => {
        if (searchMember !== '') filterMember()
        // eslint-disable-next-line
    }, [searchMember])

    const handelMobileMessages = (id) => {
        setCurrentChatID(id)
        if (innerWidth < 400) {
            setMobileChatClicked(true)
        }
    }

    let memberArray = filteredMembers ? filteredMembers : Members

    return (
        <div className={innerWidth < 400 && mobileChatClicked ? 'none mobile_chat_box ' : " messageSidebar"}>
            <div className='search_box'>
                <input className='search_input' type='test' value={searchMember}
                    onChange={(a) =>
                        setSearchMember(a.target.value)} />
            </div>
            <div className='personLists' >
                {
                    Members?.length === 0 ?
                        <div className='member'> No Active chat</div> :
                        memberArray?.length !== 0 ?
                            memberArray?.map((val) => (
                                <div className='member' onClick={() => handelMobileMessages(val._id)}>
                                    <img src={profile} alt="profile" />
                                    <p>{val.name}</p>
                                </div>
                            ))
                            :
                            <div className='member'> no match</div>
                }
            </div>
        </div>
    )
}

export default MemberList