// import styled from 'styled-components'

// export const ButtonContainer = styled.button`
// text-transform : capitalize;
// font-size : 1.4rem;
// background: transparent;
// border:0.05rem solid var(--lightBlue);
// color:var(--lightBlue);
// border-radius:0.5rem;
// padding:0.2rem 0.5 rem;
// cursor:Pointer;
// margin:0.2rem 0.5rem 0.2rem 0;
// transition:all 0.5s ease-in-out;
// &:hover{
//     background:var(--lightBlue);
//     color:var(--mainBlue);
// }
// &:focus{
//     outline:none;

// }`

// export const NavWrapper = styled.nav`
// background:var(--mainBlue);
// .nav-link{
// color:var(--mainWhite)!important;
// font-size:1.3rem;
// text-transform: capitalize;

// }

// `

import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className=" col-10 mx-auto my-2 text-center text-title">

                <h1 className ="text-capitalize font-weight-bold">
                    {name} <strong className="text-blue"> {title}
                    </strong>
                </h1>        
            </div>
        </div>
    )
}