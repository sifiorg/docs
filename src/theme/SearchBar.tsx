// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar
// export {default} from '@docusaurus/Noop';

import React from "react";
import { MendableSearchBar } from "@mendable/search";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface SearchBarWrapperProps {}

const SearchBarWrapper: React.FC<SearchBarWrapperProps> = (icon) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  return (
    <div className="mendable-search">
      <MendableSearchBar
        anon_key={customFields.mendableAnonKey as string}
        showSimpleSearch
        isPinnable
        askAIText="Ask AI"
        style={{
          accentColor: "#d64e3a",
          darkMode: false,
        }}
        searchBarStyle={{
          // backgroundColor: "#1F2937",
          borderColor: "#141417",
          color: "#383B40",
        }}
        placeholder="Search"
        dialogPlaceholder="How does an endpoint work?"
      />
    </div>
  );
};

export default SearchBarWrapper;
