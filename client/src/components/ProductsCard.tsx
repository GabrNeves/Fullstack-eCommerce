import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Product } from '../global/types';
import Rating from '@mui/material/Rating';

export default function ProductsCard({products}:any) {
  const currencyFormater = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  })
  return (
    <Card sx={{ maxWidth: 345 }}>
        {products && products.map((product: Product) => {
      return (
      <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {product.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {currencyFormater.format(product.price)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.description}
            </Typography>
            <Rating name="read-only" value={product.rating.rate + product.rating.count} readOnly />
            </CardContent>
        </CardActionArea>
        )

        })}
    </Card>
  );
}