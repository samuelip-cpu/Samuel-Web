import {NavLink} from 'react-router-dom';

export const projectCard = ({ project }: any) => {
    const {_id,name,  picture} = project || {};
    return (
    
        <NavLink to ={`/${name}/${_id}`}>
            <div className="component-card">
                <img src= {picture} alt="Component Image" />
            </div>
            <div>
                <h3>{name}</h3>
            </div>
        </NavLink>
    );
}