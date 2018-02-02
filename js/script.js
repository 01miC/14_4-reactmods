
var movies = [
    {
        id:'1',
        src: './covers/inter.jpg',
        title: 'Interstellar',
        desc: 'Film podróży kosmicznej' 
    },
    {
        id:'2',
        src: './covers/stg.jpg',
        title: 'Stargate',
        desc: 'Film o gwiezdnych wrotach'

    },
    {
        id:'3',
        src: './covers/stid.jpg',
        title: 'Star Trek Into Darkness',
        desc: 'Film o przygodach USS Enterprise'
    },
    {
        id:'4',
        src: './covers/be.jpg',
        title: 'Efekt motyla',
        desc: 'Film o podróżach w czasie'
    },
    {
        id:'5',
        src: './covers/arrival.jpg',
        title: 'Arrival',
        desc: 'Film o poznawaniu nieznanego'
    },
    {
        id:'6',
        src: './covers/stga.jpg',
        title: 'Stargate Atlantis',
        desc: 'Film o gwiezdnych wrotach i Atlantydzie'
    },
    {
        id:'7',
        src: './covers/tr.jpg',
        title: 'The Road',
        desc: 'Film postapokaliptyczny'
    }
]


//compontents

var MovieTitle = React.createClass({
propTypes: {
    title: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
        React.createElement('h2', {}, this.props.title)
        )
}
});
var MovieDescription = React.createClass({
propTypes: {
    desc: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
        React.createElement('p', {}, this.props.desc) 
    )
  }
}) ;

var MovieList = React.createClass({
propTypes: {
  movie: React.PropTypes.object.isRequired,
},
render: function() {
  return (
        React.createElement('li', {className: 'container'},
            React.createElement('img',{src:this.props.movie.src}),
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDescription, {desc: this.props.movie.desc}) 
                            )
        )
    }
});

//render
var moviesElements = movies.map(function(movie) {
    return React.createElement(MovieList, {key: movie.id, movie: movie})
});

var moviesList = React.createClass({
    render: function() {
        return (React.createElement('ul', {}, moviesElements))
    }
});

var element =
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(moviesList, {})
);

ReactDOM.render(element, document.getElementById('app'));