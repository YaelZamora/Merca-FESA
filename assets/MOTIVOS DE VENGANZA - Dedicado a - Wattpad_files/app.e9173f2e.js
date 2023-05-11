/**
   * Fast UUID generator, RFC4122 version 4 compliant.
   * @author Jeff Ward (jcward.com).
   * @license MIT license
   * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
   **/
a.generateUUID=function(){for(var e=[],t=0;t<256;t++)e[t]=(t<16?"0":"")+t.toString(16);var n=4294967295*Math.random()|0,a=4294967295*Math.random()|0,s=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return e[255&n]+e[n>>8&255]+e[n>>16&255]+e[n>>24&255]+"-"+e[255&a]+e[a>>8&255]+"-"+e[a>>16&15|64]+e[a>>24&255]+"-"+e[63&s|128]+e[s>>8&255]+"-"+e[s>>16&255]+e[s>>24&255]+e[255&i]+e[i>>8&255]+e[i>>16&255]+e[i>>24&255]},a.getBidFormat=function(e){return"index"===e?{adPartner:e,priceField:"price",priceIncrement:"bic",requestIdField:"ixRequestId",responseIdField:"ixResponseId",bidderField:"partnerId"}:"prebid"===e?{adPartner:e,priceField:"cpm",priceIncrement:"cpm",requestIdField:"pbRequestId",responseIdField:"pbResponseId",bidderField:"bidderCode"}:void 0},a.getBestBid=function(e,n,a){for(var s={},i=(n=n||"unknown",0);i<e.length;i++){var r=e[i];if("undefined"!=typeof __atha&&a){var o=__atha.sendBid(n,t.get(r,"partner","unknown"),t.get(r,"bic",void 0),r.dimensions);r.id=r.source_bid.id=o}(!s.hasOwnProperty("bic")||r.bic>s.bic)&&(s=r)}return s},a.sendAuctionResult=function(t,n,a,s){if("undefined"!=typeof __atha){var i=__atha.sendAuctionResult(a,t,n);e.ads[a][s.responseIdField]=i}},a.getAdzerkOverrides=function(e,t){var n={advertisers:{}},a=e.cpm?e.cpm:e.price?e.price/100:0;return n.advertisers[t]={ecpm:a},n},a.getAdzerkPartnerFields=function(e){var n={},a=t.get(e,"source_bid.targeting",{});return n.partnerId=e.partner?e.partner:null,n.ixWidth=e.dimensions?e.dimensions.split("x")[0]:"1",n.ixHeight=e.dimensions?e.dimensions.split("x")[1]:"1","RubiconHtb"===n.partnerId&&a.rpfl_7941&&(n.rubiconSizeId=a.rpfl_7941[0].slice(0,a.rpfl_7941[0].indexOf("_"))),t.merge(n,a)},a.adosAddPlacement=function(s,i,r){var o=r?a.normalizeBids(r,a.getBidFormat("index")):null,l=r?a.getBestBid(o,s,!0):null;a.sendAuctionResult(l,o,s,a.getBidFormat("index"));var c=i.networkId,u=i.siteId,d=i.zoneId,p=i.targeting?i.targeting:{},h=i.adTypes?i.adTypes:[],m=l?a.getAdzerkOverrides(l,370943):{},f=l?a.getAdzerkPartnerFields(l):{},g=t.merge(p,f),v=p.category&&n.categoryList[p.category]?n.categoryList[p.category]:"";if(n.testGroups.ADS_DATADOG_METRICS&&a.sendDataDogMetric({isAdRequest:!0,adRequested:!0}),"undefined"!=typeof __atha){var y=__atha.sendRequest(s,"adzerk",i);e.ads[s]=C(C({},e.ads[s]),{requestId:y})}e.ados=e.ados||{},e.ados.run=e.ados.run||[],e.ados.run.push((function(){e.ados_add_placement&&(ados_add_placement(c,u,s,h).setZone(d).setProperties(g).setOverrides(m),ados_setConsent({gdpr:!0}),ados_setKeywords(v),ados_load())}))},a.getAdzerkImpressionCPI=function(e){var t=e.dp?e.dp:e.pc?e.pc:e.ec?e.ec:0;return a.getBidPrices(t,"cpm").cpi},a.generateAndRenderHardcodedCreative=function(e){var n,i,o,l=e.split("-")[0],c=r()(l),d=document.getElementById(e);if(c&&d){o=a.getHeaderBiddingInlineStyle(t.get(c,"sizes",{}));var p=w(u()(c.sizes),2);n=p[0],i=p[1];var h=s()(l,{width:n,height:i,inlineStyle:o});d.innerHTML=h}},a.normalizeBids=function(e,t){var n=[];return e.forEach((function(e){n.push(C({id:e.id,source_bid:e,dimensions:Array.isArray(e.size)?e.size.join("x"):e.size,partner:e[t.bidderField]},a.getBidPrices(e[t.priceField],t.priceIncrement)))})),n},a.getBidPrices=function(e,t){var n,a,s;switch(t){case"cpm":s=100*(n=e),a=n/1e3;break;case"cpi":a=e,s=100*(n=1e3*e);break;case"bic":a=(n=(s=e)/100)/1e3;break;default:n=a=s=0}return{cpm:Number(n.toFixed(2)),cpi:Number(a.toFixed(6)),bic:Number(s.toFixed(0))}},a.getIxPrebidSizes=function(e){var t=[];return Object.entries(e.sizes).forEach((function(n){var a=w(n,2),s=(a[0],a[1]);t.push({bidder:"ix",params:{siteId:e.ixSiteId,size:s}})})),t},a.showPleaseVerifyModal=function(){var e=new app.views.PleaseVerifyModal;$("#generic-modal .modal-body").html(e.render().$el),$("#generic-modal .modal-content").addClass("please-verify-modal-wrapper"),$("#generic-modal").modal({})},a.showSentEmailModal=function(e){var t=new app.views.VerifyEmailModal(e);$("#generic-modal .modal-body").html(t.render().$el),$("#generic-modal .modal-content").addClass("sent-email-modal-wrapper"),$("#generic-modal").modal({})},a.showChangeEmailModal=function(e){var t=new app.views.VerifyEmailModal(e);$("#generic-modal .modal-body").html(t.render().$el),$("#generic-modal .modal-content").addClass("change-email-modal-wrapper"),$("#generic-modal").modal({})},a.getCurrentUserRoles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isSysAdmin,n=void 0!==t&&t,a=e.ambassador,s=void 0!==a&&a;return{isSysAdmin:n,isAmbassador:s}},a.clearCommentLocalStorage=function(){var t=/mobile-web#part.\w*.comments/,n=/mobile-web#comments.\w*.replies/;Object.keys(e.localStorage).forEach((function(a){(t.test(a)||n.test(a))&&e.localStorage.removeItem(a)}))},a.clearStoriesLocalStorage=function(){var t=/mobile-web#story.read.\w*.metadata/,n=/mobile-web#part.\w*.metadata/,a=/mobile-web#stories.\w*/,s=/mobile-web#reading-list.\w*.stories/;Object.keys(e.localStorage).forEach((function(i){if(t.test(i)||n.test(i)||a.test(i)||s.test(i)){var r=i.split("#")[1];app.local._clearItem(r),e.localStorage.removeItem(i)}}))},a.getSearchTitle=d,a.tagsHelper=h.a,a.isUnsafe=g.isUnsafe,a.forcedSignupHelper={isForcedSignupSession:m.isForcedSignupSession,isForcedSignupExemptView:f.isForcedSignupExemptView}}(window,window._,window.wattpad)},function(e,t,n){"use strict";n.r(t);var a=n(5),s=n.n(a),i=n(83),r=n.n(i),o=n(84),l=n.n(o),c=n(85),u=n.n(c),d=n(50),p=n.n(d),h=n(86),m=n.n(h),f=n(51),g=n.n(f),v="story-planner";!function(e,t,n,a,i){a.add("WorksItemDetails",a.views.Base.extend({events:{"tap .on-edit-save":"onEditSaveSelected","tap .on-publish":"onPublish","tap .on-edit-cancel":"onEditCancelSelected","mouseenter .on-cover-edit-icon":"onCoverEditIconEnter","mouseleave .image-placeholder":"onCoverEditLeave","keyup .story-title":"onStoryTitleKeyUp","focus .story-title":"onStoryTitleFocus","blur .story-title":"onStoryTitleBlur","blur .story-description":"onStoryDescriptionBlur","paste [contenteditable]":"pastePlainText","change #categoryselect":"onCategorySelected","keyup .character-input":"onCharacterInputKeyUp","tap .on-add-character":"onAddCharacter","click .on-add-character":"stopEvent","tap .on-remove-character":"onRemoveCharacter","click .on-remove-character":"stopEvent","tap .on-add-tag":"onAddTagSelected","blur .on-tag-input":"onTagInputBlurred","keydown .on-tag-input":"onTagInputKeydown","change #mature-switch":"ratingChange","tap .on-new-part":"onNewPartClicked","tap .on-stats":"onStatsClicked","tap .on-delete-story":"onDeleteStoryClicked","tap .on-delete-published-story":"onDeletePublishedStoryClicked","tap .on-select":"onSelectAll","tap .on-embed":"onEmbedClicked","tap .on-delete-part":"onDeletePartClicked","tap .on-do-delete-part":"onDoDeletePart","tap .on-delete-published-part":"onDeletePublishedPartClicked","submit #delete-story-form":"onDoDeleteStory","tap .on-unpublish-part":"onUnpublishPartClicked","tap .on-unpublish-story":"onUnpublishStoryClicked","tap .on-do-unpublish-part":"onDoUnpublishPart","tap .on-do-unpublish-story":"onDoUnpublishStory","click .on-okay":"stopEvent","tap .on-okay":"onPopoverOk","click .popover-icon":"stopEvent","tap .popover-icon":"onPopover","mousedown .on-trigger-tooltip":"onTriggerTooltip","click .on-trigger-tooltip":"stopEvent","tap .on-trigger-tooltip":"stopEvent","click  .on-contest-popover":"onContestFormPopover","tap  .on-contest-popover":"onContestFormPopover","tap .on-edit-close":"onEditClose","click .on-view-as-reader":"stopEvent","tap .on-view-as-reader":"viewAsReader","click #acknowledge-checkbox":"onAcknowledge"},templates:{worksItemDetails:u.a,character:p.a,tag:l.a,status:r.a,contestBanner:g.a},initialize:function(e){e=e||{},_.bindAll(this,"onCloseTooltip"),this.defaultStoryTitle=n.trans("Untitled Story"),this.isNew=e.isNew||!1,this.showTips=e.showTips||!1,this.isPublish=e.isPublish||!1,this.isPreview=e.isPreview||!1,this.partModel=e.partModel||null,this.model=e.model,this.storyLabelsModel=e.storyLabelsModel,this.didEditCharacters=!1,this.charactersLimit=20,this.maxNumParts=t.utils.currentUser().getMaxNumParts(),this.prefilledTag=e.prefilledTag||null,this.isWattysEligible=e.isWattysEligible,this.isWattysNearEligible=e.isWattysNearEligible,this.isWattysFormSubmitted=e.isWattysFormSubmitted,this.displayWattysBanner=e.isWattysNearEligible||e.isWattysEligible,this.SUGGESTED_WRITER_TAGS=this.isWattysEligible?[t.wattysActiveKey]:[],this.isNew&&this.model.set("title",this.defaultStoryTitle),Handlebars.registerPartial("desktop.create.works_item_editable_tag",this.templates.tag),Handlebars.registerPartial("desktop.components.modal.share_embed",s.a),Handlebars.registerPartial("desktop.create.works_table_of_contents",m.a),Handlebars.registerPartial("desktop.create.works_contests",g.a.bind(this,{storyId:this.model.id})),Handlebars.registerPartial("desktop.create.works_character_item",p.a)},render:function(){var n,s,i,r,o,l=this.model.toJSON();l.published=!1,_.each(l.parts,(function(e){e.stats=!!(e.readCount||e.VoteCount||e.commentCount),l.published=l.published||!e.draft&&!e.deleted})),l.descriptionRemaining=2e3-l.description.length,l.languages=t.supportedLangs,l.categories=_.reduce(a.get("categories").toJSON(),(function(e,t){return _.contains(t.roles,"writing")&&e.push(t),e}),[]),l.language={id:l.language||t.utils.currentUser().get("language"),name:_.result(_.find(l.languages,(function(e){return e.id==l.language})),"name")},l.everyone=!l.mature&&!l.ratingLocked,l.writerMature=l.mature&&!l.ratingLocked,l.maturePrivate=l.private&&l.mature,l.communityMature=l.mature&&l.ratingLocked,l.bcover=l.cover.replace("/cover/","/bcover/"),l.tooManyTagsInTheKitchen=_.size(l.tags)>20,this.isPublish&&(""===l.cover&&(n=!0),""!==l.title.trim()&&l.title.trim()!==this.defaultStoryTitle||(s=!0),""===l.description&&(i=!0),l.categoryObject||(r=!0),0===l.tags.length&&(o=!0),l.published);var c=this.partModel?this.partModel.get("title"):"",u=this.model.get("hasBannedCover"),d=this.formatTags(l.tags,this.prefilledTag),p=t.utils.currentUser().get("locale").slice(0,2);e.store.dispatch(e.app.components.actions.setStoryTags({tags:d,withIcon:!0})),e.store.dispatch(e.app.components.actions.setContestFormSubmissionStatus(this.isWattysFormSubmitted)),e.store.dispatch(e.app.components.actions.setContestFormNearEligibleStatus(this.isWattysNearEligible)),this.model.set({hasBannedImages:_.some(this.model.get("parts"),(function(e){if(!0!==e.deleted&&e.hasBannedImages)return!0}))||u}),e.store.dispatch(e.app.components.actions.updateActiveTab("toc"));var h=this.isPublish&&!l.published;this.$el.html(this.templates.worksItemDetails({story:l,showNewStats:!0,isNew:this.isNew,showTips:this.showTips,isPublish:this.isPublish,needCover:n,needTitle:s,needDescription:i,displayWattysBanner:this.displayWattysBanner,canvaApiKey:t.canvaApiKey,createCanvaCover:this.createCanvaCover.bind(this),needCategory:r,needTag:o,partTitle:c,testGroups:t.testGroups,lang:p,targetAudience:this.storyLabelsModel.get("target_audience"),characters:this.storyLabelsModel.get("characters"),charactersLimit:this.charactersLimit,prefilledTag:this.prefilledTag,hasBannedImages:this.model.get("hasBannedImages")||!1,hasBannedCover:u,onSwitchTabs:this.onSwitchTabs.bind(this),showAcknowledgeOriginalWorks:h,handleUpdateCopyright:this.handleUpdateCopyright.bind(this)}));var m=0;return _.each(this.model.get("parts"),(function(e){!0!==e.deleted&&m++})),m>=this.maxNumParts&&this.$(".on-newpart").parent().addClass("too-many-parts"),this.postRender(),this},renderContestBanner:function(){var e=null;this.displayWattysBanner&&(e=this.templates.contestBanner({storyId:this.model.id})),this.$("#contest-banner-container").html(e)},onDragEnd:function(){var e=_.map(this.$(".story-part"),(function(e){return $(e).data("id")}));e.length===this.model.get("parts").length&&(e=e.join(","),this.model.set({textids:e}),this.model.save())},onEditClicked:function(){a.router.trigger("route:createWorksEdit",this.model.get("id"))},onSelectAll:function(){var t=e.document.createRange();t.selectNode(e.document.getElementById("embed-url")),e.getSelection().addRange(t)},resetModal:function(){this.$("#embed-modal,#stats-modal,.delete-story-modal,.delete-published-story-modal,.unpublish-story-modal,.delete-part-modal,.delete-published-part-modal,.unpublish-part-modal").addClass("hidden"),this.$("#details-modal .modal-dialog").removeClass("embed").removeClass("stats")},onEmbedClicked:function(){var e=this.$("#embed-modal iframe");this.resetModal(),this.$("#details-modal .modal-dialog").addClass("embed"),e.attr("src",e.data("href")),this.$("#embed-modal").removeClass("hidden")},onStatsClicked:function(e){e.preventDefault(),a.router.navigate("/myworks/"+this.model.get("id")+"/analytics",{trigger:!0})},onDeletePartClicked:function(e){this.resetModal(),this.model.get("parts").length<2?this.onDeleteStoryClicked():(this.deleteId=$(e.currentTarget).data("id"),this.$(".delete-part-modal").removeClass("hidden"))},onDeletePublishedPartClicked:function(e){this.resetModal(),this.model.get("parts").length<2?this.onDeletePublishedStoryClicked():(this.deleteId=$(e.currentTarget).data("id"),this.unpublishId=$(e.currentTarget).data("id"),this.$(".on-delete-part").data("id",this.deleteId),this.$(".delete-published-part-modal").removeClass("hidden"))},onUnpublishPartClicked:function(e){this.resetModal(),this.unpublishId=$(e.currentTarget).data("id"),this.$(".unpublish-part-modal").removeClass("hidden")},onUnpublishStoryClicked:function(e){this.resetModal(),this.unpublishId=$(e.currentTarget).data("id"),this.$(".unpublish-story-modal").removeClass("hidden")},onDeleteStoryClicked:function(){this.resetModal(),this.$(".delete-story-modal .alert").addClass("hidden"),this.$(".delete-story-modal").removeClass("hidden")},onDeletePublishedStoryClicked:function(){this.resetModal(),this.$(".delete-published-story-modal").removeClass("hidden")},validateUsernameFields:function(e,a){var s=[];return e===a&&0!==e.length&&0!==a.length||s.push(t.utils.trans("Username fields should match")),e!==n.currentUser().get("username").trim().toLowerCase()&&s.push(t.utils.trans("Username is incorrect")),s},onDoDeleteStory:function(e){n.stopEvent(e);var t=$(e.currentTarget),s=t.find("#username").val().trim().toLowerCase(),i=t.find("#confirm-username").val().trim().toLowerCase(),r=this.validateUsernameFields(s,i);if(r.length>0){var o=t.find(".alert ul.messages");o.empty();for(var l=0;l<r.length;l++)o.append("<li>"+r[l]+"</li>");t.find(".alert").removeClass("hidden")}else{t.find("button, input").attr("disabled",!0);var c=this;this.model.set("transaction_key",n.currentUser().get("username")),Promise.resolve(this.model.destroy()).then((function(){return c.model.set("transaction_key",null),n.cacheBust("Works",{username:n.currentUser().get("username")},c.model.get("id"))})).then((function(){a.router.navigate("/myworks/",{trigger:!0,replace:!0})})).catch((function(e){c.displayErrors(e.responseJSON?e.responseJSON.message:e.message||e.errors||e)}))}},onDoDeletePart:function(){var e=this,t=new a.models.StoryPartCreateModel({id:this.deleteId,authorid:n.currentUser().get("id")});Promise.resolve(t.destroy()).then(this.handlePromiseUnexpected).catch(this.handlePromiseExpected).then((function(){return Promise.resolve(e.model.fetch({fresh:!0,data:{drafts:1}}))})).then((function(){n.cacheBust(["Works","Works"],[{username:n.currentUser().get("username")},{username:n.currentUser().get("username"),published:!0}],e.model.storyId),e.$("#details-modal").on("hidden.bs.modal",(function(){$(this).off("hidden.bs.modal"),e.$("[data-id='"+e.deleteId+"']").addClass("fade hide"),e.render()})).modal("hide");var t=0;_.each(e.model.get("parts"),(function(e){!0!==e.deleted&&t++})),t<e.maxNumParts&&e.$(".on-newpart").parent().removeClass("too-many-parts")}))},onDoUnpublishStory:function(e){var t=this,s=_.reject(this.model.get("parts"),(function(e){return e.draft||e.deleted})),i=n.currentUser().get("id"),r=0;n.stopEvent(e),this.$("#unpublish-modal .progress-bar").attr("aria-value",0).width("0%").removeClass("progress-bar-success").addClass("progress-bar-info"),this.$("#unpublish-modal .cta").attr("disabled",!0),this.$("#working-wrapper").removeClass("hidden"),0!==s.length?_.each(s,(function(e){var n=new a.models.StoryPartCreateModel({id:e.id,authorid:i});Promise.resolve(n.unpublish()).then((function(){r++,t.updateUnpublishStatus(s.length,r)}))})):this.updateUnpublishStatus(1,1)},onDoUnpublishPart:function(){var e=this,t=new a.models.StoryPartCreateModel({id:this.unpublishId,authorid:n.currentUser().get("id")});Promise.resolve(t.unpublish()).then((function(){return Promise.resolve(e.model.fetch({fresh:!0,data:{drafts:1}}))})).then((function(){e.$("#details-modal").on("hidden.bs.modal",(function(){$(this).off("hidden.bs.modal"),e.render()})).modal("hide")}))},updateUnpublishStatus:function(t,a){var s=this,i=100*Math.floor(a/t);if(this.$(".unpublish-story-modal .progress-bar").attr("aria-valuenow",i).width(i+"%"),t===a){this.$("#unpublish-working").text(n.trans("Done")),this.$(".unpublish-story-modal .progress-bar").removeClass("progress-bar-info").addClass("progress-bar-success");var r=n.currentUser();r._clearStoriesCache(),n.cacheBust(["Works","Works"],[{username:r.get("username")},{username:r.get("username"),published:!0}],this.selectedStoryId),this.model.fetch({fresh:!0}).then((function(){e.setTimeout((function(){s.$("#details-modal").on("hidden.bs.modal",(function(){$(this).off("hidden.bs.modal"),s.render()})).modal("hide")}),500)}))}},onNewPartClicked:function(e){var t=0;if(_.each(this.model.get("parts"),(function(e){!0!==e.deleted&&t++})),t>=this.maxNumParts)n.stopEvent(e);else{for(var s=this,i=!1,r=!1,o=1,l=new a.models.StoryPartCreateModel({groupid:this.model.get("id"),title:n.trans("Untitled Part ")+(this.model.get("parts").length+1),language:this.model.get("language"),copyright:this.model.get("copyright"),category1:this.model.get("categories")[0],draft:1,tags:this.model.get("tags").join(" ")});!1===r;)_.findWhere(this.model.get("parts"),{title:l.get("title")})?(l.set("title",n.trans("Untitled Part ")+(this.model.get("parts").length+1)+" ("+o+")"),o++):r=!0;n.stopEvent(e),Promise.resolve(l.save()).then((function(e){s.handlePromiseUnexpected(e)})).catch((function(e){i=!0,s.handlePromiseExpected(e)})).then((function(){if(!i)return Promise.resolve(s.model.fetch({fresh:!0,data:{drafts:1}}))})).then((function(){i||a.router.navigate("/myworks/"+s.model.get("id")+"/write/"+l.get("id"),{trigger:!0})}))}},onCharacterInputKeyUp:_.throttle((function(e){var t=$(e.currentTarget),n=t.parent(".character").find(".btn"),a=n.find(".fa");t.val().trim().length>0?(n.removeClass("btn-grey").addClass("btn-orange"),a.removeClass("fa-wp-neutral-1").addClass("fa-wp-neutral-5")):(n.removeClass("btn-orange").addClass("btn-grey"),a.removeClass("fa-wp-neutral-5").addClass("fa-wp-neutral-1"))}),200),onAddCharacter:function(e){var t=$(e.currentTarget),n=t.parent(".character").find("input").val().trim();n.length>0&&(this.didEditCharacters=!0,t.parent(".character").remove(),this.$(".characters").append(this.templates.character({name:n,readonly:!0})),this.$(".character").length<this.charactersLimit&&this.$(".characters").append(this.templates.character()))},onRemoveCharacter:function(e){var t=$(e.currentTarget).parent(".character");this.didEditCharacters=!0,this.$(".character [readonly]").length==this.charactersLimit&&this.$(".characters").append(this.templates.character()),t.remove(),0==this.$(".character").length&&this.$(".characters").empty().append(this.templates.character())},saveCharacters:function(){var e=[],t=this;_.each(this.$(".characters .character input"),(function(t){var n=$(t).val().trim();n.length>0&&e.push({name:n})})),this.storyLabelsModel.clear({silent:!0}),Promise.resolve(this.storyLabelsModel.save({id:parseInt(this.model.get("id")),characters:e})).catch((function(){t.handlePromiseExpected("")}))},onTagInputKeydown:function(e){var a=e.keyCode||e.which;13!==a&&32!==a||(n.stopEvent(e),this.onTagInputBlurred()<t.tagCountLimit&&this.onAddTagSelected());8===a&&0===this.getCurrentInput().length&&(n.stopEvent(e),this.$("#editable-tags .tag-item").last().remove(),this.onAddTagSelected())},getCurrentInput:function(){return this.$("#tag-input").val().trim()},onAddTagSelected:function(e){n.stopEvent(e),this.$("#add-tag").addClass("hidden"),this.$("#tag-input").val("").removeClass("hidden").focus();var s=_.difference(this.SUGGESTED_WRITER_TAGS,this.getTags()).map((function(e){return{label:e}}));this.initAutocomplete({element:"#tag-input-wrapper #tag-input",collection:new a.collections.AutocompleteTag(s),title:t.utils.trans("Suggested Tags")})},onTagInputBlurred:function(){var n=this.$("#tag-input"),a=this.cleanHTMLToText(n).trim(),s=this.getTags(),i=s.length,r=[];return this.autocompleteResults&&this.autocompleteResults.remove(),n.addClass("hidden"),i<t.tagCountLimit&&a&&-1===["texttospeech"].indexOf(a)&&-1===s.indexOf(a)&&(a===t.wattysActiveKey&&this.isWattysEligible&&e.store.dispatch(e.app.components.actions.openContestForm(this.model.id)),i++,r=this.formatTags(s.concat([a]),this.prefilledTag),e.store.dispatch(e.app.components.actions.setStoryTags({tags:r,withIcon:!0}))),i<t.tagCountLimit&&(this.$("#add-tag").removeClass("hidden"),i>0&&(this.$("#add-tag").removeClass("empty-border"),this.$("#tag-empty-warning").removeClass("red-warning"))),i},getTags:function(){return e.store.getState().storyTags.tags.map((function(e){return e.name}))},formatTags:function(e,n){return e.map((function(e){var a=e.trim();return{id:a,name:a,active:!0,className:a===t.wattysActiveKey?"wattys-tag":n&&a===n?"prefilled-tag":null}}))},pastePlainText:function(e){n.pastePlainText(e)},cleanHTMLToText:function(e){return(e.is("input")||e.is("textarea")?n.sanitizeHTMLExceptQuotes(e.val().trim()):n.sanitizeHTMLExceptQuotes(e.text().trim())).replace(/<(br|p|div)(\s*)>/gi,"\n").replace(/(<([^>]+)>)/gi,"")},sendViewAsReaderEvent:function(t){var n=$(t.currentTarget).data(),s=this.model.get("id"),i=n.id;a.currentView instanceof a.views.WorksWriter?e.te.push("event","writer",null,null,"reader_view",{storyid:s,source:"prepublish"}):"wid-btn"===n.attr?e.te.push("event","writer",null,null,"reader_view",{storyid:s,source:"story_details"}):"wid-toc"===n.attr&&e.te.push("event","writer",null,null,"reader_view",{storyid:s,partid:i,source:"table_of_contents"})},viewAsReader:function(a){var s=this,i=$(a.target).data("url");if(this.sendViewAsReaderEvent(a),n.stopEvent(a),this.isMissingRequiredFields())return this.$(".on-switch-type").removeClass("active"),this.$(".main-edit-form").removeClass("hidden"),void this.$(".table-of-contents").addClass("hidden");this.isPublish=!1;var r=e.open("","_blank");Promise.resolve(this.onEditSaveSelected()).then((function(e){r.location.href=i})).catch((function(e){r.close();var n=e.responseJSON?e.responseJSON.message:e.message||e.errors||t.utils.trans("We seem to have had some issues saving your story. Please try again.");return s.displayErrors(n)}))},isMissingRequiredFields:function(){var e=this.cleanHTMLToText(this.$(".story-title")),t=this.cleanHTMLToText(this.$(".story-description")),a=this.$("#categoryselect").val(),s=this.$("#editable-tags .tag-item"),i=this.$("#acknowledge-checkbox").hasClass("checked"),r=!1;return this.$("#publish-status-banner").empty(),this.isPublish&&!i&&(this.$("#acknowledge-empty-warning").removeClass("hidden").addClass("red-warning"),n.scrollIntoView(this.$("#acknowledge-checkbox")),r=!0),e===this.defaultStoryTitle&&(this.$(".story-title").addClass("empty-border"),this.$("#title-warning").removeClass("hidden").addClass("red-warning"),r=!0),""===t&&(this.$(".story-description").addClass("empty-border"),this.$("#description-warning").removeClass("hidden").addClass("red-warning"),r=!0),"-1"===a&&(this.$("#categoryselect").addClass("empty-border"),this.$("#category-empty-warning").removeClass("hidden").addClass("red-warning"),r=!0),0===s.length&&this.isPublish&&(this.$("#add-tag").addClass("empty-border"),this.$("#tag-empty-warning").removeClass("hidden").addClass("red-warning"),r=!0),r},onAcknowledge:function(e){this.$("#acknowledge-empty-warning").addClass("hidden").removeClass("red-warning")},onPublish:function(e){this.isPublish=!0,this.onEditSaveSelected()},onEditSaveSelected:function(){var t=this;if(this.model.get("id")){var n=e.store.getState().storyNotes,a=e.app.components.actions.postStoryNotes(this.model.get("id"),n.data);e.store.dispatch(a)}if(!this.showTips){if(this.$("button").attr("disabled",!0),this.$(".save-working").removeClass("hidden"),this.isPublish||this.model.get("published"))if(this.isMissingRequiredFields())return this.$("button").removeAttr("disabled"),void this.$(".save-working").addClass("hidden");var s=this.$("#complete-switch").prop("checked")?1:0,i=this.$("#mature-switch").prop("checked")?4:1,r=this.cleanHTMLToText(this.$(".story-title")),o=this.cleanHTMLToText(this.$(".story-description")),l=this.$("#categoryselect").val(),c=this.$("#languageselect").val();this.model.set({title:r,description:o,category1:l,language:c,complete:s,human_rating:i}),this.partModel&&this.partModel.set({category1:l});var u=this.model.validate(void 0,{ignore:{title:this.isPublish?[]:["isRequired","isNotEq"]}});if(u)throw this.displayErrors(_.values(u)),new Error(_.first(_.values(u)));return this.isNew?Promise.resolve(this.create(!0,!0)):Promise.resolve(this.save().then((function(){t.renderContestBanner()})))}this.$("#finish-tooltip").popover("show")},onEditCancelSelected:function(){this.model.get("id")?a.router.navigate("/myworks",{trigger:!0}):n.goBackInHistory()},displayErrors:function(e){var t=a.currentView instanceof a.views.WorksWriter?".modal-content":"html, body";this.$("#publish-status-banner").html(this.templates.status({errors:[].concat(e)})),$(t).animate({scrollTop:"0px"}),this.$("button").removeAttr("disabled"),this.$(".save-working").addClass("hidden")},create:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this,r=new a.models.StoryPartCreateModel({title:this.model.get("title"),description:this.model.get("description"),part_title:n.trans("Untitled Part 1"),language:this.model.get("language"),draft:1});return r.set("skip_title",1),Promise.resolve(r.save(void 0,{validation:{ignore:{title:["isRequired","isNotEq","maxLength"]}}})).then((function(e){return i.model.set({id:e.groupid,textids:e.id.toString(),parts:[e]}),i.model.set("skip_title",1),e.groupid,Promise.resolve(i.model.save())})).then((function(){return"-1"==i.$("#target-audience").val()||(i.storyLabelsModel.clear({silent:!0}),Promise.resolve(i.storyLabelsModel.save({id:parseInt(i.model.get("id")),target_audience:i.$("#target-audience").val()})).catch(i.handlePromiseExpected))})).then((function(){return!i.didEditCharacters||(i.didEditCharacters=!1,i.saveCharacters())})).then((function(){return i.saveTags()})).then((function(){return s?i.saveCover():Promise.resolve()})).then((function(){var t=n.currentUser();if(t._clearStoriesCache(),a.local.clear(r.resource()),a.local.clear(i.model.resource()),n.cacheBust(["Works"],[{username:t.get("username")}]),e){var s="/myworks/"+i.model.get("id")+"/write/"+i.model.get("parts")[0].id;a.router.navigate(s,{trigger:!0,replace:!1})}})).catch((function(e){i.displayErrors(e.responseJSON?e.responseJSON.message:e.message||e.errors||t.utils.trans("We seem to have had some issues saving your story. Please try again."))}))},bustWorksCache:function(){var e=t.utils.currentUser();e._clearStoriesCache();var a=n.cacheBust("Works",{username:e.get("username"),published:!0}),s=n.cacheBust("Works",{username:e.get("username")}),i=n.cacheBust("StoryCreateModel",{id:this.model.get("id")},null,!0);return Promise.all([a,s,i])},save:function(){var e=this;return this.model.set({language:this.model.get("language")}),Promise.resolve(this.model.save(void 0,{validation:{ignore:{title:["isRequired","isNotEq","maxLength"]}}})).then((function(){return"-1"==e.$("#target-audience").val()||(e.storyLabelsModel.clear({silent:!0}),Promise.resolve(e.storyLabelsModel.save({id:parseInt(e.model.get("id")),target_audience:e.$("#target-audience").val()})).catch(e.handlePromiseExpected))})).then((function(){return!e.didEditCharacters||(e.didEditCharacters=!1,e.saveCharacters())})).then((function(){return e.saveTags()})).then((function(){return!e.isPublish||Promise.resolve(e.partModel.publish())})).then((function(){return e.bustWorksCache()})).then((function(){if(e.isPublish)e.isPreview?($("#generic-modal").modal("hide"),$(".draft-tag").addClass("hidden"),$(".on-publish").addClass("hidden"),$(".on-write").addClass("hidden"),$(".preview-alert").addClass("hidden")):e.partModel&&a.router.navigate(t.utils.formatStoryUrl(e.partModel.get("url")),{trigger:!0});else{var n=t.utils.trans("Saved."),s=a.currentView instanceof a.views.WorksWriter?".modal-content":"html, body";e.$("#publish-status-banner").html(e.templates.status({successMessage:n})),$(s).animate({scrollTop:"0px"}),e.$("button").attr("disabled",!1),e.$(".save-working").addClass("hidden")}})).catch((function(n){var a=n.responseJSON?n.responseJSON.message:n.message||n.errors||t.utils.trans("We seem to have had some issues saving your story. Please try again.");throw e.displayErrors(a),new Error(a)}))},saveTags:function(){var e=this.getTags();return Promise.resolve($.ajax({type:"POST",url:"/apiv2/editstorytags",data:{request_type:"add",tag_value:e.join(" "),story_id:this.model.get("parts")[0].id,remove_old_tags:!0}}))},requestSaveCover:function(e,t,n){var a={id:e,image:t};return n&&(a.cover_source_id=n,a.cover_partner="canva"),Promise.resolve($.ajax({type:"POST",url:"/apiv2/updatestorycover",data:a}))},saveCover:function(){var t=this;return!this.FileUpload.file||t.getFile().then((function(a){if(a)return n.cacheBust(["Works","Works"],[{username:n.currentUser().get("username")},{username:n.currentUser().get("username"),published:!0}],t.model.get("id")),t.bustWorksCache(),t.$(".banned-overlay").addClass("hidden"),t.requestSaveCover(t.model.get("id"),a.parsed,a.metadata&&a.metadata.designId).then((function(n){t.model.set("cover",n.cover),t.model.set("cover_source_id",n.cover_source_id),t.model.set("cover_partner",n.cover_partner),e.te.push("event","writer","cover",null,"add",{storyid:t.model.get("id")})}))}))},onCoverEditIconEnter:function(){this.$("#cover-uploader").addClass("active"),this.$(".on-cover-edit").removeClass("hidden")},onCoverEditLeave:function(){this.$("#cover-uploader").removeClass("active"),this.$(".on-cover-edit").addClass("hidden")},onFileDragEnter:function(){this.onCoverEditIconEnter()},onPopoverOk:function(e){n.stopEvent(e),$(e.currentTarget).parent().parent().parent().popover("hide")},onCloseTooltip:function(e){var t=$(e.currentTarget),n=t.data("bs.popover");if(n&&n.tip().hasClass("in")){var a=t.attr("id");"image-tooltip"===a?this.$(".add-cover-text").click():"description-tooltip"===a?this.$(".story-description").focus():"tags-tooltip"===a?this.onAddTagSelected():"finish-tooltip"===a&&(this.showTips=!1,this.onEditSaveSelected())}},onTriggerTooltip:function(e){n.stopEvent(e);var t=$(e.currentTarget);t.parent().find('[data-toggle="popover"]').popover("show"),t.removeClass("on-trigger-tooltip"),_.delay((function(){t.hasClass("new-cover-upload")&&t.find(".dropdown-holder").attr("data-toggle","dropdown")}))},onContestFormPopover:function(e){var n=t.utils.trans;this.initPopover("#content-tooltip",n("What is mature content?"),n("These ratings help us understand if your story has sexual content, and if it does, to what magnitude. Stories with any level of sexual content are eligible to win, as long as they abide by our content guidelines."),{1:"https://www.wattpad.com/1229517874-the-2022-watty-awards-how-to-submit",2:"https://www.wattpad.com/1231193196-les-wattys-2022-comment-soumettre",3:"https://www.wattpad.com/1231200512-wattys-2022-come-iscriversi",4:"https://www.wattpad.com/1231211429-die-watty-awards-2022-wie-kann-eingereicht-werden",5:"https://www.wattpad.com/1231224269-los-premios-watty-2022-c%C3%B3mo-inscribirte",6:"https://www.wattpad.com/1231203499-pr%C3%AAmio-wattys-2022-como-se-inscrever",18:"https://www.wattpad.com/1230991528-ang-2022-watty-awards-paano-magsumite",20:"https://www.wattpad.com/1231219920-penghargaan-wattys-2022-cara-mendaftar",23:"https://www.wattpad.com/1231197790-2022-watty-%C3%B6d%C3%BClleri-nas%C4%B1l-ba%C5%9Fvurulur"}[a.get("language")])},postRender:function(){var e=t.utils.trans;this.isPreview&&this.model.get("title")===this.defaultStoryTitle&&this.$(".story-title").removeClass("has-title"),this.initPopover("#image-tooltip",e("Stories with a cover image get 23x more reads than ones without"),e("Must be in PNG, GIF, or JPG format, smaller than 2MB. Recommended cover dimensions: 512x800 pixels"),"https://support.wattpad.com/hc/articles/201376344-Adding-a-cover-to-your-story"),this.initPopover("#description-tooltip",e("Stories with descriptions get 100x more reads than ones without"),e("Write a short description that will excite your readers and hook them in"),"https://support.wattpad.com/hc/articles/201376264-Adding-a-story-description"),this.initPopover("#category-tooltip",e("This information helps us understand more about your story"),null,"https://support.wattpad.com/hc/articles/200774334-Content-Guidelines#categories"),this.initPopover("#characters-tooltip",e("Add up to 20 Main Characters. This information will not be shown to your readers. Instead, this information will be used to help Wattpad more easily discover your story."),null,"https://support.wattpad.com/hc/articles/360027382932-Add-Main-Characters-to-a-Story"),this.initPopover("#tags-tooltip",e("Adding 10 or more tags can help increase discoverability"),e("Tags should be a word or concept, reflective of your story’s themes and subgenres"),"https://support.wattpad.com/hc/articles/201409640-Adding-tags-to-a-story"),this.initPopover("#target-audience-tooltip",e("This information will not be shown to your readers. Instead, this information will be used to help Wattpad more easily discover your story."),null,"https://support.wattpad.com/hc/articles/360027383472-Add-a-Target-Audience-to-a-Story"),this.initPopover("#language-tooltip",e("Wattpad has a global audience; make sure your story reaches the right readers")),this.initPopover("#rating-tooltip",e("Rate your story appropriately to ensure a positive reading experience for your readers with no unwanted surprises"),null,"https://support.wattpad.com/hc/articles/200774334-Content-Guidelines#ratings");this.initPopover("#story-tooltip",e("If your story is complete, please let your readers know. ")+'<a href="https://support.wattpad.com/hc/articles/201376684-Marking-your-story-as-complete" target="_blank" rel="noreferrer noopener">Learn more</a>'),this.initPopover("#finish-tooltip",e("Don’t worry, you can finish adding your story information later"),null,"https://www.wattpad.com/story/71065441-secrets-to-getting-more-reads","finish-tooltip-ok"),this.prefilledTag&&(this.initPopover("#prefilled-tag-tooltip","<p>We've automatically added <span class='bold'>#"+this.prefilledTag+"</span> to your submission. This ensures we've received your entry.</p>",null,null,null,!0),this.$("#prefilled-tag-tooltip").popover("show"))},initPopover:function(e,n,a,s,i,r){var o="";n&&(o+="<div class='main-content'>"+n,a&&(o+="<div class='secondary-content'>"+a+"</div>"),o+="</div>"),o+="<div class='tooltip-footer'>",s&&(o+="<a target='_blank' href="+s+">"+t.utils.trans("Learn More")+"</a>"),o+="<button class='btn on-okay "+(r?"btn-link ":"btn-purple"),i&&(o+=i),o+="'>"+(r?"Got It":t.utils.trans("OK"))+"</button></div>";var l=this;this.$(e).popover({template:'<div class="popover writer-tooltip" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',html:!0,placement:"auto",content:function(){return o}}).on("shown.bs.popover",(function(e){var t=$(e.target);$(document).on("click.closePopover",(function(e){0===$(e.target).parents(".popover").length&&t.popover("hide")}))})).on("hide.bs.popover",(function(e){$(document).off("click.closePopover"),l.onCloseTooltip(e)}))},ratingChange:function(e){$(e.currentTarget).prop("checked")?(this.$(".everyone").addClass("hidden"),this.$(".writerMature").removeClass("hidden")):(this.$(".everyone").removeClass("hidden"),this.$(".writerMature").addClass("hidden"))},onStoryTitleKeyUp:function(){"-1"!==this.$("#categoryselect").val()&&this.isNew&&this.$(".on-edit-save .text").text(t.utils.trans("Next"))},onStoryTitleFocus:function(){var e=this.$(".story-title");e.text().trim()===this.defaultStoryTitle&&(e.text(""),e.addClass("has-title"))},onStoryTitleBlur:function(){var e=this.$(".story-title");""===e.text().trim()?(e.text(this.defaultStoryTitle),e.removeClass("has-title")):e.hasClass("empty-border")&&""!==e.text()&&(e.removeClass("empty-border"),this.$("#title-warning").removeClass("red-warning"))},onCategorySelected:function(e){""!==this.$(".story-title").text()&&this.isNew&&this.$(".on-edit-save .text").text(t.utils.trans("Next"));var n=$(e.currentTarget);n.hasClass("empty-border")&&"-1"!==n.val()&&(n.removeClass("empty-border"),this.$("#category-empty-warning").removeClass("red-warning"))},onEditClose:function(){$(".publish-modal").modal("hide")},remove:function(){$(document).off("click.closePopover"),a.views.Base.prototype.remove.apply(this,arguments)},showFile:function(){this.isNew&&(this.$(".new-cover-upload").addClass("hidden"),this.$("#cover-uploader").removeClass("hidden"),this.$("#image-tooltip").addClass("hidden"))},onStoryDescriptionBlur:function(e){var t=$(e.currentTarget);t.hasClass("empty-border")&&""!==t.val()&&(t.removeClass("empty-border"),this.$("#description-warning").removeClass("red-warning"))},onSwitchTabs:function(e){"toc"===e&&this.$(".table-of-contents").hasClass("hidden")?(this.$(".table-of-contents").removeClass("hidden"),this.$(".main-edit-form").addClass("hidden")):"story-detail"===e&&this.$(".main-edit-form").hasClass("hidden")?(this.$(".main-edit-form").removeClass("hidden"),this.$(".table-of-contents").addClass("hidden")):e===v&&(this.$(".table-of-contents").addClass("hidden"),this.$(".main-edit-form").addClass("hidden"))},fileReceivedCallback:function(){var t=this;this.model.id&&this.saveCover().then((function(){e.dispatchEvent(new CustomEvent("myworks:cover:saved",{detail:t.model.toJSON()}))}))},createCanvaCover:function(t){var n=this,a=new XMLHttpRequest;a.open("GET",t.exportUrl,!0),a.responseType="blob",a.onload=function(a){if(200==this.status){var s=this.response;n.FileUpload.file=s,n.FileUpload.file.designId=t.designId,n.showFile(),n.FileUpload.$domDrop.addClass("drop-done"),e.te.push("event","writer","cover",null,"create",{target:"canva"})}},a.send()},handleUpdateCopyright:function(e){this.model.set({copyright:e})}})),a.mixin(a.views.WorksItemDetails,"FileUpload","DragAndSort","SocialSharing","AutocompleteField")}(window,wattpad,wattpad.utils,window.app,window.Monaco)}]);
//# sourceMappingURL=app.e9173f2e.js.map