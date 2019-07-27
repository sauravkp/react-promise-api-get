import React from 'react'
import getFakeMembers from './getFakeMembers';
import Member from './Member'

class MemberList extends React.Component{
    constructor(){
        super()
        this.state = {
            members:[],
            loading:false,
            error:null
        }
    }
    componentWillMount() {
        this.setState({loading:true})
        getFakeMembers(10).then(
            members => {
                this.setState({members, loading:false})
            },
            error => {
                this.setState({error, loading:false})
            }
        )
    }

    componentWillUpdate() {
        console.log('updating lifecycle')
    }

    render() {
        const {members, loading, error} = this.state
        return (
            <div className="member-list">
                {(loading) ? 
                    <span>Loading Members..</span> :
                    (members.length) ?
                        members.map((user,i)=>
                        <Member key={i} {...user} />    
                        ):
                        <span> 0 Members loaded...</span>
                    }
                    {(error)?<p>Error loading members: error</p>:""}
            </div>
        )
    }

}

export default MemberList