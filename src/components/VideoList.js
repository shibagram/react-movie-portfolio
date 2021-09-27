import React, { useState, useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Pagination from "./Pagination";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import Dummy from "./Dummy";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 15,
  },
  cardcont: {
    padding: theme.spacing(1),
  },
  anker: {
    textDecoration: "none",
  },
}));

const VideoList = () => {
  const classes = useStyles();
  const { videos, setSelectedVideo } = useContext(ApiContext);

  // ページネーションに関するソースコード（ここから）
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = videos.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ページネーションに関するソースコード（ここまで）Ï

  // jsonを3区切りにする関数
  const devideJSON = (data) => {
    let newData = [];
    let innerList = [];

    for (let i = 0; i < data.length; i++) {
      if (i % 3 === 0) {
        innerList = [];
      }
      innerList.push(data[i]);
      if (i % 3 === 2 || i + 1 === data.length) {
        newData.push(innerList);
      }
    }
    return newData;
  };

  function FormRow(props) {
    const { row } = props;
    return (
      <React.Fragment>
        {row.map((v) => (
          <Grid item xs={4}>
            <Link to="/detail" className={classes.anker}>
              <Card
                className={classes.card}
                onClick={() => setSelectedVideo(v)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="thumnail"
                    height="200"
                    image={v.thum}
                  />
                  <CardContent className={classes.cardcont}>
                    <Typography variant="h6">{v.title}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  const devidedVideos = devideJSON(currentPosts);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {devidedVideos.map((videoRow) => (
          <Grid container item xs={12} spacing={3}>
            <FormRow row={videoRow} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={videos.length}
        paginate={paginate}
      />
    </div>
  );
};
export default VideoList;
