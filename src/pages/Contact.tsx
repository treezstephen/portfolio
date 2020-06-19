/* eslint-disable react/jsx-no-target-blank */
import React, {
    FunctionComponent,
} from 'react';
import {
    FaFileAlt,
    FaLinkedin,
    FaInstagram,
    FaGithub,
} from 'react-icons/fa';
import {
    FiMail,
} from 'react-icons/fi';
import { Title } from '../components/Title';
import Resume    from '../../resources/files/resume_stephen_cheung.pdf';

export const Contact: FunctionComponent = () => {
    return (
        <div className='section'>
            <div className='article centered'>
                <Title text='contact'/>
                <div className="contact">
                    <div className="aligned">
                        <a href="mailto:scheung1206@gmail.com" className='aligned'>
                            <FiMail />  
                            <div className='contact-text'>scheung1206@gmail.com</div>
                        </a>
                    </div>
                    <div className="aligned">
                        <a href="https://www.linkedin.com/in/scheung1206/" className="aligned">
                            <FaLinkedin />
                            <div className='contact-text'>LinkedIn</div>
                        </a>
                    </div>
                    <div className="aligned">
                        <a href="https://github.com/treezstephen" className="aligned">
                            <FaGithub />   
                            <div className='contact-text'>GitHub</div>
                        </a>
                    </div>
                    <div className="aligned">
                        <a href="https://www.instagram.com/stephen.cheung/" className="aligned">
                            <FaInstagram />
                            <div className='contact-text'>Instagram</div>
                        </a>
                    </div>
                    <div className="aligned">
                        <a href={ Resume } target='_blank' className="aligned">
                            <FaFileAlt />
                            <div className='contact-text'>Resume</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
