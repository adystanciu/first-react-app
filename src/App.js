import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';

import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';

import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      monsters: []
    };

  }

  handleChange = (e) => { this.setState({ searchField: e.target.value }) };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(monsters => this.setState({ monsters }));
  }

  monsterTemplate = (monster) => {
    return (
      <div>
        <div className="p-grid p-nogutter">
          <div className="p-col-12">
            <img src={`https://robohash.org/${monster.id}`} alt={monster} />
          </div>
          <div className="p-col-12 car-data">
            <div >{monster.name}</div>
            <div>{monster.email}</div>
            <div>{monster.id}</div>

          </div>
        </div>
      </div>
    );
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(m =>
      m.name
        .toLowerCase()
        .includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolerdex</h1>
        <SearchBox
          placeholder='Search monsters'
          handleChange={e => this.handleChange(e)}
        // setState has a second paramter named callback function, it is apply when finish setState function.
        />
        <CardList monsters={filteredMonsters} />

        <div>
          <div>
            <h1>Carousel</h1>
          </div>

          <div >
            <Button type="button" label="Show Carosel"
              className="p-button-raised p-button-rounded"
              icon="pi pi-check" iconPos="left"
              onClick={(e) => this.op.toggle(e)} />

            <OverlayPanel style={{ width: '98%', 'margin-left': '10px' }}
              ref={(el) => this.op = el}>

              <Carousel
                value={monsters}
                itemTemplate={this.monsterTemplate}
                numVisible={2}
                numScroll={2}
                header={'Header'}
                footer={'Footer'}
              />
            </OverlayPanel>

          </div>
        </div>
      </div>
    );
  }
}
export default App;
