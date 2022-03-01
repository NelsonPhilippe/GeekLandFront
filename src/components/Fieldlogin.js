import "../css/Fieldlogin.css";

function Fieldlogin(){
    return(
            <div className="connexion">
                <form action="" method="get" className="connexion">
                
                        <label for="login">Login</label>
                        <input type="text" id="login" name="login" placeholder="Enter your mail adress"required="true"/>
                    
                    <div>
                        <input type="checkbox" id="login" name="login"/>
                        <label for="login">Remember Me</label>
                    </div>
                        
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password" required="true"/>
                        <a href="">Forgot your Password?</a>
                        
                        <input type="button" id="ok" name="ok"  value="Login"/>
                        <a href="">Create New Account</a>
                </form>
            </div>
    )
}
export default Fieldlogin;