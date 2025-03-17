export default function Profile({ name, image}) {
    return (
        <img 
            src={image} 
            alt={name} 
        />
    );
  }