import usePagination, { UsePaginationProps } from "@mui/material/usePagination";
import { Button, List } from "@mui/material";
import { East, KeyboardBackspace } from "@mui/icons-material";

interface PaginationBarProps {
  totalPages: number;
  setpage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationBar: React.FC<PaginationBarProps> = (props) => {
  const { items } = usePagination({
    count: props.totalPages,
    onChange: (_, page) => props.setpage(page)
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
};

export default PaginationBar;
