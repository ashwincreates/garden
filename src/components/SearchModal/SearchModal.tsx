"use client";
import {
  Autocomplete,
  AutocompleteOption,
  Modal,
  ModalDialog,
  Typography,
} from "@mui/joy";
import { useMenuStore } from "@/provider/MenuProvider";
import algoliasearch from "algoliasearch";
import { useEffect, useState } from "react";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Kbd from "../Miscellaneous/KeyBoard";

interface AlgoOption {
  objectID: string;
  link: string;
  title: string;
}

const client = algoliasearch("15WSRQBM95", "e71a36bb01ffd53a64a0e257cd4d57f2");

function SearchModal() {
  const { search, toggleSearch } = useMenuStore();
  const [options, setOptions] = useState<AlgoOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<AlgoOption | null>(null);
  const router = useRouter();

  useEffect(() => {
    const index = client.initIndex("garden");
    index.search("").then(({ hits }) => setOptions(hits as AlgoOption[]));
  }, []);

  return (
    <Modal open={search} onClose={toggleSearch}>
      <ModalDialog
        sx={(theme) => ({
          [theme.breakpoints.only("xs")]: {
            top: "1rem",
            bottom: "unset",
            left: "1rem",
            right: "1rem",
            transform: "none",
            maxWidth: "unset",
          },
          padding: { xs: "0", md: "0.5rem" },
        })}
      >
        <Autocomplete
          options={options}
          onHighlightChange={(e, option) => setSelectedOption(option)}
          endDecorator={<Kbd>Esc</Kbd>}
          renderOption={(props, option) => (
            <AutocompleteOption {...props}>
              <Typography startDecorator={<DocumentIcon height={16} />}>
                {option.title}
              </Typography>
            </AutocompleteOption>
          )}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.title
          }
          variant="plain"
          forcePopupIcon={false}
          placeholder="Search"
          autoHighlight
          sx={{
            "&::before": {
              display: "none",
            },
            width: {
              md: "500px",
            },
            fontSize: { md: "18px" },
            fontWeight: { md: "500" },
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && selectedOption) {
              toggleSearch();
              router.push(`/${selectedOption.link}`);
            }
          }}
        />
      </ModalDialog>
    </Modal>
  );
}

export default SearchModal;
