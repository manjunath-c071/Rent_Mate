import './Loing.css';

function Loing() {
    return (
        <div className="loing-container">
            
            <form className="loing-form">
                <h2>Login</h2>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Loing;