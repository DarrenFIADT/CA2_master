/**
 * @Date:   2020-03-26T17:40:30+00:00
 * @Last modified time: 2020-04-07T23:20:05+01:00
 */



import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index'
import Registration from './views/Registration'
import Example from './views/Example'

import CoursesIndex from './views/courses/Index'
import CoursesEdit from './views/courses/Edit'
import CoursesCreate from './views/courses/Create'

import EnrolmentsCreate from './views/enrolments/Create'
import EnrolmentsIndex from './views/enrolments/Index'
import EnrolmentsEdit from './views/enrolments/Edit'

import LecturersCreate from './views/lecturers/Create'
import LecturersEdit from './views/lecturers/Edit'
import LecturersIndex from './views/lecturers/Index'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },

    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },

    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/courses',
      name: 'coursesIndex',
      component: CoursesIndex
    },
    {
      path: '/courses/edit/:id',
      name: 'coursesEdit',
      component: CoursesEdit
    },
    {
      path: '/courses/delete/:id',
      name: 'coursesDelete',
    },
    {
      path: '/courses/create',
      name: 'coursesCreate',
      component: CoursesCreate
    },
    {
      path: '/lecturers/create',
      name: 'lecturersCreate',
      component: LecturersCreate
    },
    {
      path: '/lecturers',
      name: 'lecturersIndex',
      component: LecturersIndex
    },
    {
      path: '/lecturers/edit/:id',
      name: 'lecturersEdit',
      component: LecturersEdit
    },
    {
      path: '/enrolments',
      name: 'enrolmentsIndex',
      component: EnrolmentsIndex
    },
     {
        path: '/enrolments/create',
        name: 'enrolmentsCreate',
        component: EnrolmentsCreate
      },
    {
      path: '/enrolments/edit/:id',
      name: 'enrolmentsEdit',
      component: EnrolmentsEdit
    },
  ]
})
