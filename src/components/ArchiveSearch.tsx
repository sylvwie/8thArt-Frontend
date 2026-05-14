
import {Logo} from './shared/Logo.tsx'
import { SearchBar } from './shared/SearchBar.tsx';

export function ArchiveSearch() {
  return <div className="archive-search-wrapper">
      <div className="archive-search-container">
        <Logo />
        <div className="archive-search-logs">
          <span className="log-line"><span className="ok-text">[ OK ]</span> Initializing system...</span>
          <span className="log-line"><span className="ok-text">[ OK ]</span> Loading archive...</span>
          <span className="log-line"><span className="ok-text">[ OK ]</span> Connecting to network...</span>
          <span className="log-line"><span className="ok-text">[ OK ]</span> System ready.</span>
          <span className="welcome-text">
            &gt; Welcome, <span className="orange-text">user</span>. Type in the search bar your game of choice.
          </span>
        </div>
        <SearchBar />
        <div className="status-logs">
          <span>STATUS: ONLINE</span>
          <span>UPTIME: 99.9%</span>
          <span>PING: 12ms</span>
        </div>
      </div>
    </div>
  

}
