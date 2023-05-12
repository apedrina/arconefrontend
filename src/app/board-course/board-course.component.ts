import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-course',
  templateUrl: './board-course.component.html',
  styleUrls: ['./board-course.component.css']
})
export class BoardCourseComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
}
