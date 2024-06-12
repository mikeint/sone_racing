import './Homepage.css'
import Image from 'next/image';
import Navbar from '@/components/NavBar/NavBar';

const GameInfo = () => (
    <div className="hp-container">
        <div className='hp-name'>
            <span>Sone Racing</span>
            <Image src="/Images/cars/ferrariF40.png" alt="Car Racing" width={300} height={200} />
        </div>
            
        <div className='hp-image'>
            <Image src="/Images/homepage/hp1.png" alt="Car Racing" width={800} height={400} />
            <div className='hp-p'>Select from a list of UserCars and Unowned Cars</div>
        </div>
        <div className='hp-image'>
            <Image src="/Images/homepage/hp2.png" alt="Car Racing" width={800} height={400} />
            <div className='hp-p'>
                Edit your cars. Each car has 6 parts. Each part can have 1-n Dicefaces.
                Within each Diceface is 3 Diceface Attributes. You need to fine tune your attributes 
                on all dice in order to find the correct balance of stats for your car. 
            </div>
        </div>
        <div className='hp-image'>
            <Image src="/Images/homepage/hp3.png" alt="Car Racing" width={800} height={400} />
            <div className='hp-p'>
                You will have to purchase dice and attributes with in-game currency called Sone Coins. 
                You can race to earn more. Use them to purchase dice faces for specific parts. But be careful,
                higher dice, have lower rollrates.
            </div>
        </div>
        <div className='hp-image'>
            <Image src="/Images/homepage/hp4.png" alt="Car Racing" width={800} height={400} />
            <div className='hp-p'>
                Select from a list of racing options. Each race has its own uniqueness.
            </div>
        </div>
        <div className='hp-image'>
            <Image src="/Images/homepage/hp5.png" alt="Car Racing" width={800} height={400} />
            <div className='hp-p'>
                Each part will be present on any race, represented by the dice.
                Push the gas n amount of times to push your car to its limits. 
                Race against friends, ai or yourself. 
            </div>
        </div>
        <div className='hp-image'>
            <Image src="/Images/homepage/hp6.png" alt="Car Racing" width={800} height={400} />
            <div className='hp-p'>
                Each push on the throttle will accuratly show a representation or screenshot of 
                your cars current stats with the current diceroll that is in play for that roll.
                After your second spin, you may begin to lock in specific dice you want to keep from rolling
            </div>
        </div>
    </div>
);


const Footer = () => (
  <div className='hp-footer'>
    <p>&copy; 2024 Sone Racing</p>
  </div>
);

export default function HomePage() {
  return (
    <>
        <Navbar />
        <GameInfo />
        <Footer />
    </>
  );
}
