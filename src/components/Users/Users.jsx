import React from "react";
import classes from "./Users.module.css";


let Users = (props) => {
    if (props.users.length === 0)
       { props.setUsers([
                    {
                        id: 1,
                        userPhoto: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png',
                        followed: true,
                        fullName: 'Lewis',
                        status: 'Black master',
                        location: {city: 'London', country: 'England'}
                    },
                    {
                        id: 2,
                        userPhoto: 'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png',
                        followed: false,
                        fullName: 'Carlos',
                        status: 'Carlito',
                        location: {city: 'Barcelona', country: 'Spain'}
                    },
                    {
                        id: 3,
                        userPhoto: 'https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col/image.png',
                        followed: true,
                        fullName: 'Seb',
                        status: 'Finger',
                        location: {city: 'Heppenheim', country: 'Germany'}
                    },
                    {
                        id: 4,
                        userPhoto: 'https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/2col/image.png',
                        followed: true, fullName: 'Kimi', status: 'Iceman', location: {city: 'Oslo', country: 'Finland'}
                    }

                ]
          
        )}
    return (


        <div>
            {props.users.map(u => <div key={u.id} className={classes.userWrapper}>
                <div>
                    <div><img src={u.userPhoto} alt=""/></div>

                    {u.followed ?
                        <button onClick={() => {
                            props.unFollow(u.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
            </div>)}
        </div>


    )


};

export default Users;