import { Skeleton, Col, Spin } from "antd";

export const CategoriesLoading = (props) => {
  return (
    <div style={{ paddingTop: 20, paddingRight: 10 }}>
      <Skeleton title={false} active paragraph={{ rows: 5 }} loading={props.loading}>
        {props.children}
      </Skeleton>
    </div>
  );
};

export const BlogLoading = (props) => {
  return (
    <div style={{ padding: "0px 5% 5% 5%" }}>
      <Skeleton active loading={props.loading} paragraph={{ rows: 11 }} />
      {props.children}
    </div>
  );
};

export const ImageLoading = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: 25,
      }}
    >
      <Skeleton.Image />
    </div>
  );
};

export const RecentPostsLoading = (props) => {
  const array = [1, 2, 3, 4];
  return (
    <>
      {props.loading
        ? array.map((_, index) => (
            <div
              key={index}
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Skeleton.Image style={{ marginRight: 10, marginTop: 15 }} />
              <Skeleton title={false} active paragraph={{ rows: 3 }} />
            </div>
          ))
        : props.children}
    </>
  );
};

export const FourBlogsLoading = (props) => {
  const array = [1, 2, 3, 4];
  return (
    <>
      {props.loading
        ? array.map((_, index) => (
            <Col
              xl={10}
              lg={10}
              md={22}
              sm={22}
              xs={22}
              style={{
                backgroundColor: "#fff",
                borderRadius: 4,
                margin: "4%",
                boxShadow: "rgb(0 0 0 / 10%) 0px 0px 25px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 10,
                }}
              >
                <Skeleton.Image style={{ marginTop: 18 }} />
              </div>
              <div style={{ padding: "7% 9% 7% 7%" }}>
                <Skeleton title={false} active paragraph={{ rows: 12 }} />
              </div>
            </Col>
          ))
        : props.children}
    </>
  );
};
