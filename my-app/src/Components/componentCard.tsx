import {NavLink} from 'react-router-dom';

export const projectCard = ({ project }: any) => {
    const {name,  picture} = project || {};
    return (
        <div>
            <NavLink to ={`../Projects/${name}`}>
                <div className="component-card">
                    <img src= {picture} alt="Component Image" />
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
            </NavLink>
        </div>
    );
}