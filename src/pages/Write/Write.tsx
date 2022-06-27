import React from 'react';
import "./write.css"

export const Write = () => {
    return (
        <div className="write">
            <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="writeImg"/>
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-folder-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Napisz artykół..." className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Opublikuj</button>
            </form>
        </div>
    );
};