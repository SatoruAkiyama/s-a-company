import React, { useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";

import ProcessCategory from "../ui/ProcessCategory";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "4em",
    opacity: 0,
    animation: "$fade-in 1s forwards",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  "@keyframes fade-in": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  bigImage: {
    maxWidth: "500px",
    maxHeight: "500px",
    width: "90%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "300px",
      maxHeight: "300px",
      margin: "0 auto",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "250px",
      maxHeight: "250px",
    },
  },
}));

const RevolutionPage = () => {
  useEffect(() => {
    document.title = "-The Revolution- S-A Company";
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Grid item style={{ marginBottom: "4em" }}>
          <Typography
            variant="h2"
            align={matchesMD ? "center" : undefined}
            gutterBottom
          >
            The Revolution
          </Typography>
        </Grid>
        {/* vision */}
        <Grid item container direction="row" style={{ marginBottom: "8em" }}>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems={matchesMD ? "center" : "flex-start"}
            lg
          >
            <img
              src="https://cdn.pixabay.com/photo/2019/12/14/07/21/mountain-4694346_960_720.png"
              alt=""
              className={classes.bigImage}
              style={{ borderRadius: "50%" }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            lg
            style={{
              maxWidth: "38em",
              margin: matchesMD ? "4em auto" : undefined,
            }}
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesMD ? "center" : "right"}
              >
                Vision
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "right"}
              >
                The rise of computers, and subsequently the Internet, has
                completely altered every aspect of human life. This has
                increased our comfort, broadened our connections, and reshaped
                how we view the world.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "right"}
              >
                What once was confined to huge rooms and teams of engineers now
                resides in every single one of our hands. Harnessing this
                unlimited potential by using it to solve problems and better
                lives is at the heart of everything we do.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "right"}
              >
                We want to help businesses capitalize on the latest and greatest
                technology. The best way to predict the future is to be the one
                building it, and we want to help guide the world into this next
                chapter of technological expansion, exploration, and innovation.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "right"}
              >
                We want to help businesses capitalize on the latest and greatest
                technology. The best way to predict the future is to be the one
                building it, and we want to help guide the world into this next
                chapter of technological expansion, exploration, and innovation.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "right"}
              >
                By holding ourselves to rigorous standards and pristine quality,
                we can ensure you have the absolute best tools necessary to
                thrive in this new frontier.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "right"}
              >
                We see a future where every individual has personalized software
                custom tailored to their lifestyle, culture, and interests,
                helping them overcome life’s obstacles. Each project is a step
                towards that goal.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* vision */}
        {/* technology */}
        <Grid item container direction="row" style={{ marginBottom: "8em" }}>
          <Grid
            item
            container
            direction="column"
            lg
            style={{
              maxWidth: "38em",
              margin: matchesMD ? "4em auto" : undefined,
            }}
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesMD ? "center" : "left"}
              >
                Technology
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "left"}
              >
                In 2013, Facebook invented a new way of building websites. This
                new system, React.js, completely revolutionizes the process and
                practice of website development.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "left"}
              >
                Instead of chaining together long individual pages, like
                traditional websites, React websites are built with little
                chunks of code called components. These components are faster,
                easier to maintain, and are easily reused and customized, each
                serving a singular purpose.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "left"}
              >
                Two years later they shocked the world by releasing a similar
                system, React Native, for producing iOS and Android apps.
                Instead of having to master two completely separate development
                platforms, you can leverage the knowledge you already possessed
                from building websites and reapply it directly! This was a huge
                leap forward.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "left"}
              >
                This technology is now being used by companies like AirBnB,
                Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
                Facebook purchased Instagram large portions of it were even
                rebuilt using React.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "left"}
              >
                Developers have since built on top of these systems by
                automating project setup and deployment, allowing creators to
                focus as much as possible on their work itself.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "left"}
              >
                These technical advancements translate into savings by
                significantly reducing the workload and streamlining the
                workflow for developing new pieces of software, while also
                lowering the barrier to entry for mobile app development.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "left"}
              >
                {" "}
                This puts personalization in your pocket — faster, better, and
                more affordable than ever before.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems={matchesMD ? "center" : "flex-end"}
            lg
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/06/18/22/10/smartphone-2417419_960_720.png"
              alt=""
              className={classes.bigImage}
            />
          </Grid>
        </Grid>
        {/* technology */}
      </Container>
      {/* process */}
      <Grid item container justify="center">
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Process
          </Typography>
        </Grid>
      </Grid>
      {/* process */}
      {/* Consultation */}
      <ProcessCategory
        bgColor="#b3b3b3"
        title="Consultation"
        imageUrl="https://cdn.pixabay.com/photo/2019/03/31/09/43/hand-shake-4092737_1280.png"
      >
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Our process begins the moment you realize you need a piece of
            technology for your business. Whether you already have an idea for
            where to start and what to do, or if you just know you want to step
            things up, our initial consultation will help you examine your
            business holistically to find the best solutions.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Detailed notes will be taken on your requirements and constraints,
            while taking care to identify other potential areas for
            consideration.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Cutting-edge advancements in machine learning like object detection
            and natural language processing allow computers to do things
            previously unimaginable, and our expertise and intuition will help
            usher you into this new future of possibilities.
          </Typography>
        </Grid>
      </ProcessCategory>
      {/* Consultation */}
      {/* Mockup */}
      <ProcessCategory
        bgColor="rgb(252 148 148)"
        title="Mockup"
        imageUrl="https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978_1280.png"
      >
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            After we settle on the best path forward and decide on a solution to
            pursue, details like the cost and timeline will be finalized.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Then it’s time for us to start on your minimum viable product.
            That’s just a fancy term for a mockup, which doesn’t include colors,
            images, or any other polished design elements, but captures the
            essential layout structure and functionality.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            This helps us understand and refine the solution itself before
            getting distracted by specifics and looks.
          </Typography>
        </Grid>
      </ProcessCategory>
      {/* Mockup */}
      {/* Review */}
      <ProcessCategory
        bgColor="rgb(149 189 164)"
        title="Review"
        imageUrl="https://cdn.pixabay.com/photo/2018/08/19/03/33/magnifying-glass-3615985_1280.png"
      >
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Before moving any farther we come back to you with our progress.
            This gives you the freedom to discuss any changes you may want or
            any ideas you may have come up with before any heavy lifting has
            been done.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            We give you an interactive demonstration of the mockups, thoroughly
            explaining the thought process that went into each screen and every
            anticipated feature.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Once you’re completely satisfied with the vision for our solution we
            get down to the nitty gritty, fine-details of design.
          </Typography>
        </Grid>
      </ProcessCategory>
      {/* Review */}
      {/* Design */}
      <ProcessCategory
        bgColor="rgb(132 212 248)"
        title="Design"
        imageUrl="https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_1280.png"
      >
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Using the mockups and notes taken during the consultation as guides,
            we will start ironing out what the final product will look like.
            This also involves using any brand material like fonts, colors, and
            logos to extend the experience you’re already familiar with.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            No aspect is superfluous, and care will be taken with every
            decision.
          </Typography>
        </Grid>
      </ProcessCategory>
      {/* Design */}
      {/* Review */}
      <ProcessCategory
        bgColor="rgb(149 189 164)"
        title="Review"
        imageUrl="https://cdn.pixabay.com/photo/2018/08/19/03/33/magnifying-glass-3615985_1280.png"
      >
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            A second round of review is essential to our goal of creating
            exactly what you want, exactly how you want it.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            This time we’ll be going over the finalized designs in another fully
            interactive demonstration. Again this gives you an opportunity to
            tweak things and make sure we get everything right the first time.
          </Typography>
        </Grid>
      </ProcessCategory>
      {/* Review */}
      {/* Build */}
      <ProcessCategory
        bgColor="rgb(255 191 97)"
        title="Build"
        imageUrl="https://cdn.pixabay.com/photo/2019/03/22/19/57/carpenter-4074056_1280.png"
      >
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Engineering begins after your approval on the final designs. We
            start by scaffolding out the project on a high level, prioritizing
            some areas over others.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Typically the backend, behind the scenes operations are completed
            first. Once all the services are in place we can then create the
            front end, user side of things.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            And we use extensive testing to guarantee compatibility with all
            intended devices.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Only after our rigorous examinations will we accept a product as
            finished, then pushing it through the production pipeline. This
            produces an optimized, compressed, consumer version of the code and
            assets ready for deployment.{" "}
          </Typography>
        </Grid>
      </ProcessCategory>
      {/* Build */}
      {/* Launch */}
      <ProcessCategory
        bgColor="rgb(116 116 255)"
        title="Launch"
        imageUrl="https://cdn.pixabay.com/photo/2018/05/21/12/36/logo-3418127_1280.png"
      >
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            The moment we’ve all been waiting for.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            When construction comes to a close you’re the first one to know.
            We’ll give our final demonstration to show off your shiny new
            software in the wild so you know exactly how it will look to your
            users.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            When you say the word, we press the button and launch your project
            out to the public. We’re there to ensure everything goes to plan so
            you can start reaping the rewards of your technological investment
            immediately.
          </Typography>
        </Grid>
      </ProcessCategory>
      {/* Launch */}
      {/* Maintain */}
      <ProcessCategory
        bgColor="rgb(149 49 166)"
        title="Maintain"
        imageUrl="https://cdn.pixabay.com/photo/2017/03/11/21/26/usb-2135902_960_720.png"
      >
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Our work doesn’t end there.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            After a successful launch we keep in close contact to listen to
            feedback and hear how the project is being received.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            From there on out we make sure your application is kept up to date
            and taking advantage of the best features and practices available.
            When new developments arise or new techniques are discovered in
            future projects, we will implement those advancements in your
            project as part of our routine maintenance.
          </Typography>
        </Grid>
      </ProcessCategory>
      {/* Maintain */}
      {/* Iterate */}
      <ProcessCategory
        bgColor="rgb(101 160 174)"
        title="Iterate"
        imageUrl="https://cdn.pixabay.com/photo/2017/10/18/23/26/recursion-icon-2865934_960_720.png"
      >
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            The cycle repeats whenever you come up with a new idea for extending
            your current project, or come up with a brand new system entirely.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            By planning for future features and changes we can build and evolve
            your application over time. As new use cases and customer needs
            develop we can respond with continuous integration of new content.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#fff" }}
            align={matchesMD ? "center" : "left"}
          >
            Our iterative process will keep you current and competitive,
            allowing you to quickly implement changes instead of waiting months
            for a single update.
          </Typography>
        </Grid>
      </ProcessCategory>
      {/* Iterate */}
    </Grid>
  );
};

export default RevolutionPage;
