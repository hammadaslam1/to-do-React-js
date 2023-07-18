import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Checkboxes = () => {
    return ( 
        <div className="flex bg-slate-400 rounded-full flex-col w-[fit-content] items-center gap-y-4 m-5">
            <Checkbox color='error' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox color='error' icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
        </div>
     );
}
 
export default Checkboxes;