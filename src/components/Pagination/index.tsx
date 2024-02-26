import usePagination from "@mui/material/usePagination";
import { Button, List } from "@mui/material";
import { East, KeyboardBackspace } from "@mui/icons-material";

export default function UsePagination() {
  const { items } = usePagination({
    count: 3,
  });

  return (
    <nav>
      <List className="list-none	flex justify-center">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "";
          } else if (type === "page") {
            children = (
              <Button
                key={index}
                variant={selected ? "contained" : "outlined"}
                className="ml-4 rounded-lg"
                {...item}
              >
                {page}
              </Button>
            );
          } else {
            children =
              type === "previous" ? (
                <Button
                  component="label"
                  variant="outlined"
                  className="rounded-lg"
                  {...item}
                  startIcon={<KeyboardBackspace />}
                >
                  Prev.
                </Button>
              ) : (
                <Button
                  component="label"
                  className="rounded-lg ml-4"
                  variant="contained"
                  {...item}
                  startIcon={<East />}
                >
                  Next.
                </Button>
              );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}