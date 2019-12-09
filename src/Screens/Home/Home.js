import React,{Component} from "react"
import axios from "axios"
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        axios.get(`/api/user`).then(results =>{
            this.setState({user:results.data})
        })
    }
    render(){
       const{user}=this.state
       console.log(user)
        return(
            <div>
                {user ? (
                    user.map(person =>{
                        return(
                            <div>
                                <p>{`welcome ${person.firstname} ${person.lastname}`}</p>
                            </div>
                        )
                    })
                ):"sorry idk"}
            </div>
        )
    }
}

export default Home