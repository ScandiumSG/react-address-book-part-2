import { useNavigate } from 'react-router-dom'
import "./ContactCard.css"

const ContactCard = ({contact, toggleDeleteModal}) => {
    const navigate = useNavigate()
    
    const handleNavigation = (id) => {
        navigate(`/contacts/${id}`)
    }

    return (
        <>
        <button 
            id="deleteButton" 
            onClick={() => toggleDeleteModal(contact)}>
                <img 
                    src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/recycle-bin-icon.png"
                />
            </button>
        <div 
        style={{border: `solid 5px ${contact.favouriteColour}`, boxShadow: `2px 8px 16px ${contact.favouriteColour}`}}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `4px 24px 48px ${contact.favouriteColour}`)}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `2px 8px 16px ${contact.favouriteColour}`)}
        className="card" 
        onClick={() => handleNavigation(contact.id)}
        >
            <img src={contact.profileImage}/>
            <div className="card-container">
                <div className="card-title">
                    <h2>{contact.firstName} {contact.lastName}</h2>
                    {contact.jobTitle && <p>{contact.jobTitle}</p>}
                </div>
                {contact.email && <p>{contact.email}</p>}
                {(contact.street && contact.city) && 
                    <p>{contact.street}, {contact.city}</p>
                }
            </div>
        </div>
        </>
    )
}

export default ContactCard