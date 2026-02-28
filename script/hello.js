let currentTab = "all";

const tabActive = ["bg-blue-300", "border-blue","text-white"]
const tabEnactive = ["bg-transparent","text-slate-700","border-state-200","text-black"]
const allContainer = document.getElementById("all-section");
const interviewSection = document.getElementById("interview-container");
const rejectedSection = document.getElementById("rejected-container")

const emptyState = document.getElementById("empty-state")



function switchTab(tab){
//  console.log(tab);
 const tabs = ["all","interview","rejected"]
  currentTab =  tab

 for(const t of tabs){

  const tabName = document.getElementById('tab-'+ t)
  if(t === tab){
    tabName.classList.remove(...tabEnactive);
    tabName.classList.add(...tabActive)
  }
  else{
    tabName.classList.add(...tabEnactive);
    tabName.classList.remove(...tabActive)
  }
 }

 const pages = [allContainer,interviewSection,rejectedSection]

 for(const section of pages){
  section.classList.add("hidden")
 }

 emptyState.classList.add("hidden")

 if(tab === "all"){
  allContainer.classList.remove('hidden')
   if( allContainer.children.length <1){
    emptyState.classList.remove("hidden")
   }
 }
 else if(tab === "interview"){
  interviewSection.classList.remove("hidden")
   if(  interviewSection.children.length < 1){
      emptyState.classList.remove("hidden")

   }
 }
 else{
  rejectedSection.classList.remove("hidden")
    if(rejectedSection.children.length <1){
      emptyState.classList.remove("hidden")
    }
 }
 updareStart()
}



const totalStat = document.getElementById("stat-total")
const statInterview = document.getElementById("stat-interview")
const statRejected = document.getElementById("stat-rejected")
const avaleState = document.getElementById("available")


totalStat.innerText =allContainer.children.length



switchTab(currentTab) 


document.getElementById("job-container").addEventListener("click",function(event){
  const clickElement = (event.target)
  const card = clickElement.closest(".card")
  const parent = card.parentNode;
  const stat = card.querySelector(".status")
  // console.log(clickElement.parentNode.parentNode.parentNode.parentNode);
  // console.log(clickElement);
  if(clickElement.classList.contains("interview")){
    stat.innerText = "interview"
   interviewSection.appendChild(card)
   updareStart()
  }
  if(clickElement.classList.contains("rejected")){
    stat.innerText = "rejected"
    rejectedSection.appendChild(card)
    updareStart()
  }
  if(clickElement.classList.contains("delete")){
    parent.removeChild(card)
    updareStart()
  }
})

function updareStart(){
//   totalStat.innerText = allContainer.children.length
//  statInterview.innerText = interviewSection.children.length
//   statRejected.innerText = rejectedSection.children.length

  const counts = {
    all:allContainer.children.length,
    interview : interviewSection.children.length,
    rejected :rejectedSection.children.length
 }
 totalStat .innerText = counts["all"]
 statInterview.innerText = counts['interview']
 statRejected.innerText = counts['rejected']

 avaleState .innerText = counts[currentTab]
 if(counts[currentTab] < 1){
  emptyState.classList.remove("hidden")
 }
 else{
  emptyState.classList.add("hidden")
 }
}
updareStart()