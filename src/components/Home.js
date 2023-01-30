import Card from "react-bootstrap/Card";
import React from "react";

function Home() {
        return (
        <Card 
            bgcolor="light"    
            txtcolor="dark"
            header="BadBank Landing Page"
            title="Welcome to the bank"
            text="You can use this bank"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
        
    );
}

export default Home;