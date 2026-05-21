import {Logo} from './shared/Logo.tsx'
import { SearchBar } from './shared/SearchBar.tsx';
import { SuggestedGames } from "./SuggestedGames.tsx";
import DecryptedText from './motion/DecryptedText.tsx';

export function ArchiveSearch() {
  return (
  <div className="archive-search-wrapper">
      <div className="archive-search-container">
        <Logo />
        <div className="archive-search-logs">
          
          <span className="log-line"><span className="ok-text">
             <DecryptedText 
                  text="[0K] "
                  sequential
                  useOriginalCharsOnly={false}
            ></DecryptedText>
            </span> 
             <DecryptedText 
                text="Initializing system..."
                sequential
                delay={100}
                useOriginalCharsOnly={false}
          ></DecryptedText>
          </span>
          
          <span className="log-line"><span className="ok-text">
             <DecryptedText 
                  text="[0K] "
                  delay={400}
                  sequential
                  useOriginalCharsOnly={false}
            ></DecryptedText>
            </span> 
             <DecryptedText 
                text="Connecting to network..."
                sequential
                delay={500}
                useOriginalCharsOnly={false}
          ></DecryptedText>
          </span>

          <span className="log-line"><span className="ok-text">
             <DecryptedText 
                  text="[0K] "
                  delay={200}
                  sequential
                  useOriginalCharsOnly={false}
            ></DecryptedText>
            
            </span> 
             <DecryptedText 
                text="Loading archive..."
                sequential
                delay={300}
                useOriginalCharsOnly={false}
          ></DecryptedText>
          </span>
          <span className="log-line"><span className="ok-text">
             <DecryptedText 
                  text="[0K] "
                  sequential
                  delay={600}
                  useOriginalCharsOnly={false}
            ></DecryptedText>
            
            </span> 
             <DecryptedText 
                text="System ready."
                sequential
                delay={700}
                useOriginalCharsOnly={false}
          ></DecryptedText>
          </span>
          <span className="welcome-text">
          &gt; 
            <DecryptedText 
                  text=" Welcome, "
                  sequential
                  delay={800}
                  useOriginalCharsOnly={false}
            ></DecryptedText>

            

            <span className="user-name-text"><DecryptedText 
                  text="user"
                  sequential
                  delay={820}
                  useOriginalCharsOnly={false}
            ></DecryptedText></span>
            
            
            <DecryptedText 
                  text=". Type in the search bar your game of choice. "
                  sequential
                  delay={900}
                  useOriginalCharsOnly={false}
            ></DecryptedText>
            
            
          </span>
        </div>
        <SearchBar />
        <div className="showcase-side showcase-side-right">
          <SuggestedGames />
          <SuggestedGames />
          <SuggestedGames />
        </div>
		
      </div>
    </div>
  )

}

// RICORDO!!!! di inserire il nome dell'utente al posto di user, se è loggato, altrimenti lasciare user.