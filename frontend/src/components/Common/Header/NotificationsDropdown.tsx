import { IoIosNotifications } from 'react-icons/io';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../../../components/ui/dropdown-menu"

interface IProps {
    avatar:any,
    displayName:string
}

const NotificationsDropdown = () => {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className='flex items-center relative'>
            <IoIosNotifications color='white' size={28} />
            <div className='absolute top-[-5px] right-[-5px]'>
              <div className='rounded-full bg-[#f44545] h-[20px] w-[20px]'>
                <div className='h-full flex items-center justify-center'>
                  <span className='text-white text-[14px]'>1</span>
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-9/12 bg-pri">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, asperiores?</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, asperiores?</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, asperiores?</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, asperiores?</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )

};

export default NotificationsDropdown;