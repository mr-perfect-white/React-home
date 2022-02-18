import React, {Component} from "react"
// import "./chat.css"
import Picker from 'emoji-picker-react';


class Chat extends Component{
    constructor(){
        super()
        this.state = ({
            user : {name: "Admin", image: "https://static.thenounproject.com/png/17241-200.png"},
            friends : [{name: "Friend1", image: "https://static.thenounproject.com/png/17241-200.png"}],
            selected_friend : 0,
            msg: "",
            selectEmoji: false,
            selectGif: false,
            msg_list : [],
            gif_list : ["https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif", "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif/640px-Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif", "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/24/640x320/landscape-1497533116-not-dead.gif", "https://media4.giphy.com/media/3o6wrvdHFbwBrUFenu/200.gif", "https://images.ctfassets.net/l3l0sjr15nav/NCqT6EmgLiydETEgvagXG/24e1571ad345881afc6e775bf6f86a82/200611-EN-GIF-GIFs-Rule.gif", "https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif", "https://images.wondershare.com/filmora/article-images/what-is-gif.gif"],
            sample: 16
        })
    }

    addFriend = () => {
        this.setState(prev =>({
            friends: [...prev.friends, {name: "Friend"+(this.state.friends.length+1), image: "https://static.thenounproject.com/png/17241-200.png"}],
        }))
    }

    selectFriend = (index) => {
        this.setState({
            selected_friend: index
        })
    }

    onEmojiClick = (e, emojiObject) => {
        document.getElementById("msg-input").value = document.getElementById("msg-input").value + emojiObject.emoji
        this.setState({
            msg: document.getElementById("msg-input").value
        })
    }

    msgChangeHandler = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    sendMessage = () => {
        if (this.state.msg !== ""){

            this.setState(prev =>({
                msg_list: [...prev.msg_list, {"text": this.state.msg, send: true, friend_id: this.state.selected_friend}]
            }))
            document.getElementById("msg-input").value = ""
            this.setState({
                msg: {}
            })

        }

    }

    emojiSelector = () => {
        this.setState({
            selectEmoji: !this.state.selectEmoji,
            selectGif: false
        })

    }

    gifSelector = () => {
        this.setState({
            selectGif: !this.state.selectGif,
            selectEmoji: false
        })
    }

    sendGif = (index) => {

        this.setState(prev =>({
            msg_list: [...prev.msg_list, {"gif_id": index, send : true, friend_id: this.state.selected_friend}]
        }))
    }

    render(){
        var friends = this.state.friends
        var add_friend = this.addFriend
        var select_friend = this.selectFriend
        var selected_friend_id = this.state.selected_friend
        var onEmojiClick = this.onEmojiClick
        var msgChangeHandler = this.msgChangeHandler
        var sendMessage = this.sendMessage
        var emojiSelector = this.emojiSelector
        var selectEmoji = this.state.selectEmoji
        var msg_list = this.state.msg_list
        var friend = this.state.friends[selected_friend_id]
        var gifSelector = this.gifSelector
        var selectGif = this.state.selectGif
        var gif_list = this.state.gif_list
        var sendGif = this.sendGif
        var sample = this.state.sample
        return(
            <div className="container-fluid">
                <div className="navbar row">
                    <h3>Chat</h3> 
                </div>
                <div className="row">
                    <div className="col-lg-3 sidebar">
                        {friends.map((friend, index) => {
                            return(
                                <div className = "friend" onClick = {()=>select_friend(index)}>
                                    <h4>{friend.name} <img src={friend.image} alt="" style = {{height: "50px", borderRadius: "25px"}}/></h4>
                                </div>
                            )
                        })}
                        <button className="btn btn-primary"onClick = {add_friend}>+</button>
                    </div>
                    <div className="col-lg-9 chat-history">

                        <h1 style = {{textAlign: "center"}}>{friend.name}<img src={friend.image} alt="" style = {{height: "50px", borderRadius: "25px"}}/></h1>

                        <div className="msg-row row">
                            {/* ------ nested if ------ */}
                            {/* {sample<10
                                ?[
                                    (sample>2?
                                        <p>sample gt 2 and lt 10</p>
                                        :""
                                    ),
                                    (sample<2?
                                        <p>sample lt 2</p>
                                        :""
                                    )
                                    (sample == 2?
                                        <p>sample is 2</p>
                                        :""
                                    )
                                ]
                                :[
                                    (sample>15?
                                        <p>sample gt 10 and gt 15</p>
                                        :""
                                    ),
                                    (sample<15?
                                        <p>sample gt 10 and lt 15</p>
                                        :""
                                    ),
                                    (sample == 15?
                                        <p>sample is 15</p>
                                        :""
                                    )
                                ]
                            } */}
                            
                            {msg_list.map((msg, index) => {
                                if (msg.friend_id === selected_friend_id){
                                    if (msg.send){
                                        return(
                                            <div className="msgs row">
                                                
                                                <div className="col-lg-6">
                                                </div>
                                                {msg.text?
                                                    <div className="col-lg-6 send-txt">
                                                        <h4>{msg.text}</h4>
                                                    </div>

                                                    : ""
                                                }
                                                {msg.gif_id?

                                                    <div className="col-lg-6 send-gif">
                                                        <img src={this.state.gif_list[msg.gif_id]} alt="" className = "msg-gif"/>
                                                    </div>

                                                    : ""
                                                }
                                            </div>
                                        )
                                    }
                                    else{
                                        return(
                                            <div className="msgs row">
                                                
                                                {msg.text?
                                                    <div className="col-lg-6 recieve-txt">
                                                        <h4>{msg.text}</h4>
                                                    </div>

                                                    : ""
                                                }
                                                {msg.gif?

                                                    <div className="col-lg-6 recieve-gif">
                                                        <img src={msg.gif} alt="" className = "msg-gif"/>
                                                    </div>

                                                    : ""
                                                }
                                            </div>
                                        )
                                    }
                                }
                            })}

                        </div>

                        <div className="row msg-input-container">
                            <div className="col-lg-8">
                                <input type="text" name="" id="msg-input" className = "msg-input" onChange = {msgChangeHandler}/>
                            </div>
                            <div className="col-lg-2 emoji-gif">
                                <button className="btn btn-white" onClick = {emojiSelector} style = {{width: "50px"}}>😀</button>
                                <button className="btn btn-white" onClick = {gifSelector}>GIF</button>
                            </div>
                            <div className="col-lg-2">
                                <button className="btn btn-success" onClick = {sendMessage}>Send</button>
                            </div>


                            {selectEmoji?
                            
                                <div>
                                    <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '80%', height: '300px' }}/>
                                </div>
                                :""
                            }

                            {selectGif?
                                <div className = "gif-container">
                                    {gif_list.map((gif, index) => {
                                        return(
                                            <img src={gif} alt="" className = "gif" onClick = {()=>sendGif(index)}/>
                                        )
                                    })}
                                </div>
                                :""
                            }

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;