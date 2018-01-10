<h1 align="center">
  <!-- Logo -->
  ![my-zomato](src/pic8.jpeg)
  <br/>
  @MyZomato
  <br/>
  <div align="center">
    <a href="https://travis-ci.org/reactphp/react"><img src="https://travis-ci.org/reactphp/react.svg?branch=master" alt="Build Status"></a>
  </div>
</h1>

Front end started with pure css grid system and made layout structure for as required. For grid refrence [css grid](https://www.w3schools.com/css/css_grid.asp)

# Example

```HTML
<div class="container">
    <div class="header">
        ....
    </div>
    <div class="article">
        ....
    </div>
    <div class="section">
        ....
    </div>
</div>
```

```CSS
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
}
.header {
    grid-column: 1 / 3;
    grid-row: 1;
}
```

# Installation

```console
git clone https://github.com/avinash-walkwell/my-zomato.git
```



# Designing Components.
To achieve the goal of designing component we used ui framework (css framework like bootstrap) [@Ant Design](https://ant.design/).

