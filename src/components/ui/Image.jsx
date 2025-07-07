
import error from '../../assets/images/Error.svg'
import sucess from '../../assets/images/successCheck.svg'
import cancel from '../../assets/images/cancel.svg'
import add from '../../assets/images/add.svg'
import addSquar from '../../assets/images/addSquar.svg'
import close from '../../assets/images/close.svg'
import profile from '../../assets/images/profile.svg'
import search from '../../assets/images/search.svg'
import dashboard from '../../assets/images/dashboard.svg'
import report from '../../assets/images/report.svg'
import student from '../../assets/images/student.svg'
import fees from '../../assets/images/fees.svg'
import shift from '../../assets/images/shift.svg'
import users from '../../assets/images/users.svg'
import logout from '../../assets/images/logout.svg'
import bar from '../../assets/images/menu.svg'
import doubleArrow from '../../assets/images/doubleArrow.svg'
import loginPageImage from '../../assets/images/loginPageImage.svg'
import loginBackgound from '../../assets/images/trasparentIconsBackground.svg'
import cap from '../../assets/images/cap.svg'
import ActiveStudent from '../../assets/images/ActiveStudent.svg'
import ExpiredStudent from '../../assets/images/ExpiredStudent.svg'
import ExpiringSoon from '../../assets/images/ExpiringSoon.svg'
import Chair from '../../assets/images/Chair.svg'
import boyIcon from '../../assets/images/boyIcon.svg'
import girlIcon from '../../assets/images/girlIcon.svg'
import Alarm from '../../assets/images/Alarm.svg'
import seats from '../../assets/images/seats.svg'
import EditButton from '../../assets/images/EditButton.svg'
import revenue from '../../assets/images/revenue.svg'
import expense from '../../assets/images/expense.svg'
import profit from '../../assets/images/profit.svg'
import pendingCollection from '../../assets/images/pendingCollection.svg'
import pendingAmount from '../../assets/images/pendingAmount.svg'
import revenueChart from '../../assets/images/revenueChart.svg'




const filePath={
   error:error,
   sucess:sucess,
   cancel:cancel,
   add:add,
   addSquar:addSquar,
   close:close,
   profile:profile,
   search:search,
   dashboard:dashboard,
   report:report,
   student:student,
   fees:fees,
   shift:shift,
   users:users,
   logout:logout,
   bar:bar,
   doubleArrow:doubleArrow,
   loginPageImage:loginPageImage,
   loginBackgound:loginBackgound,
   ActiveStudent:ActiveStudent,
   ExpiredStudent:ExpiredStudent,
   ExpiringSoon:ExpiringSoon,
   Chair:Chair,
   boyIcon:boyIcon,
   girlIcon:girlIcon,
   cap:cap,
   Alarm:Alarm,
   seats:seats,
   EditButton:EditButton,
   revenue:revenue,
   expense:expense,
   profit:profit,
   pendingCollection:pendingCollection,
   pendingAmount:pendingAmount,
   revenueChart:revenueChart,
};

const Image = ({src,w='w-8', h='h-8',className=''}) => {
  return (
    <img src={src} className={`${h} ${w} ${className}`.trim()} />
  )
}

export {Image,filePath}
