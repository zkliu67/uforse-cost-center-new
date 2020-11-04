import React from 'react';
import { object, string, bool, number } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText, withStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  mr: {
    marginRight: theme.spacing(2)
  }
}));

const StyledListItem = withStyles(() => ({
  root: {
    borderBottom: "1px solid rgba(230,232,230, 0.75)",
  }
}))(ListItem);

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

function ListView({data, marginRight}) {
  const classes = useStyles();

  const listItem = (({name, link, id}) => {
    return (
      <StyledListItem key={id}>
        <ListItemText primary={name} />
        <ListItemText primary={link} />
      </StyledListItem>
    )
  })

  const rootClass = marginRight ? `${classes.root} ${classes.mr}` : `${classes.root}`;
  
  return (
    <div className={rootClass}>
    <Typography>{data.title}</Typography>
    {data.data.size < 1 ? (
      <Typography>{data.warning}</Typography>
    ): (
      <List component="nav" aria-label="primary mailbox folders">        
        {data.data.map((record, idx) => {
          if (idx < 3) {
            return listItem(record)
          }      
        })}
        </List>
    )}
    </div>  
  );
}

ListView.propTypes = {
  data: object,
  onboarding: object,
  name: string,
  link: string,
  marginRight: bool,
  id: number
}

export default ListView;