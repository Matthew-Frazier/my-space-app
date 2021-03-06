import React from 'react';
import axios from 'axios';
import { Header, Container, Divider, Card, Image, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = {accounts: [] }

  componentDidMount() {
    axios.get("/api/accounts")
      .then( res => this.setState({ accounts: res.data }))
      .catch( err => console.log(err) )
  }

  followAccount = (id) => {
    const {accounts} = this.state; 
    axios.put(`/api/accounts/${id}`)
    .then(() => {
      this.setState({accounts: accounts.filter(a => a.id !== id)})
    })
  }

  unfollowAccount = (id) => {
    const {accounts} = this.state 
    this.setState({accounts: accounts.filter(a => a.id !== id)})
  }



  render() {
    const {accounts} = this.state
    if (accounts) {
      return (
        <Container style={{ padding: "25px 0" }}>
          <Header as="h1" textAlign="center">
            Your Friend Suggestions
          </Header>
          <hr />
          <br />
          <Card.Group>
            {accounts.map (account => 
          <Card key={account.id} raised fluid>
            <Card.Content>
              <Card.Header>{account.name}</Card.Header>
              <Divider/>
              <Card.Meta>
                Age: {account.age} |
                Location: {account.location}
              </Card.Meta>
              <Image floated="left" size="tiny" circular src={account.image} />
              <Card.Description textAlign="center">{account.bio}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button.Group size="tiny" floated="right">
              <Button color="green" icon basic  animated onClick={() => this.followAccount(account.id)}>
                <Button.Content visible>Follow</Button.Content>
                <Button.Content hidden>
                <Icon name="plus" />
                </Button.Content>
              </Button>
              <Button  color="red" icon basic animated onClick={() => this.unfollowAccount(account.id)}>
                <Button.Content visible>Unfollow</Button.Content>
                <Button.Content hidden><Icon name="minus" /> </Button.Content>
                
              </Button>
              </Button.Group>
            </Card.Content>
          </Card>
          )}
          </Card.Group>
        </Container>
      );
    } else {
      return <Header textAlign="center">You Have No Friends! </Header>;
    }
  }
};

export default Home;