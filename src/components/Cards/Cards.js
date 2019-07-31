import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Cards.css'
import {connect} from "react-redux"





const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

function ImgMediaCard(props) {
  const classes = useStyles();

  function addPanier(e) {
    props.dispatch({type:"ADD_LIST",payload:e})
  }

  return (
<div className="cards-display">
    {props.tabProduits.map((el,i)=>(
        <div className="cards-margin">
            <Card className={classes.card}>
                     <Typography gutterBottom variant="h5" component="h2">
                          <p>{el.ModeProduit}</p>
                     </Typography> 
                <CardActionArea>
                <CardMedia
                   component="img"
                   alt="Contemplative Reptile"
                   height="200"
                   image={el.imageProduits}
                   title="Contemplative Reptile"
                 />
                 <CardContent>
                   <div className="display-prix"> 
                 <Typography gutterBottom variant="h5" component="h2">
                     {el.typeProduit}
                     </Typography>
                     <Typography gutterBottom variant="h5" component="h2">
                     {el.prixProduits}
                     </Typography>
                     </div>

                    
                     <Typography variant="body2" color="textSecondary" component="p">
                         {el.descProduits}
                         </Typography>
                         </CardContent>
                         </CardActionArea>
                         <CardActions>
                         <Button size="small" color="primary" onClick={()=>addPanier(el)}>
                             Add
                             </Button>
                             <Button size="small" color="primary">
          Partager
        </Button>
      </CardActions>
    </Card>

        </div>
    ))}
</div>



    // <Card className={classes.card}>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Mode produits
    //       </Typography>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       alt="Contemplative Reptile"
    //       height="200"
    //       image="https://www.spacefox.shop/wp-content/uploads/2019/01/TSHIRT-GROUND-CONTROL-face.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Type de produit
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Description produits Description produits
    //         Description produits Description produits
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Favoris
    //     </Button>
    //     <Button size="small" color="primary">
    //       Partager
    //     </Button>
    //   </CardActions>
    // </Card>
  );
}

export default connect()(ImgMediaCard);
